import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import NewTicketForm from '../TicketForm/NewTicketForm';
import EditTicketForm from '../TicketForm/EditTicketForm';
import TicketList from '../TicketList';
import TicketDetail from '../TicketDetail';

export default function TicketControl() {
  const [visible, setVisible] = useState('list');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [mainTicketList, setMainTicketList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'tickets'), // listen for changes on tickets collection
      (collectionSnapshot) => {
        const tickets = [];
        collectionSnapshot.forEach((doc) => {
          console.log(doc.data());
          tickets.push({ ...doc.data(), date: doc.data().date.toDate(), id: doc.id });
        });
        setMainTicketList(tickets);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unsubscribe();
  }, []); // empty array as 2nd arg means will just run once, on component load (the subscribing will only run once)

  const handleAddTicketClick = () => {
    console.log('ADD_CLICK');
    setVisible('new-ticket-form');
  }

  const handleEditTicketClick = () => {
    console.log('EDIT_CLICK');
    setVisible('edit-ticket-form');
  }

  const handleAddingNewTicketToList = async (newTicketData) => {
    console.log('ADD_NEW');
    try {
      await addDoc(collection(db, 'tickets'), newTicketData);
    } catch(err) {
      console.log(err);
    }
    setVisible('list');
  }

  const handleUpdatingTicket = async (updatedTicket) => {
    console.log('UPDATE');
    const ticketRef = doc(db, 'tickets', updatedTicket.id);
    await updateDoc(ticketRef, updatedTicket);
    setSelectedTicket(null);
    setVisible('list');
  }

  const handleChangingSelectedTicket = (id) => {
    console.log('SELECT');
    if (id) {
      const selectedTicket = mainTicketList.filter(ticket => ticket.id === id)[0];
      setSelectedTicket(selectedTicket);
      setVisible('details');
    } else {
      setSelectedTicket(null);
      setVisible('list');
    }
  }

  const handleDeletingTicket = async (id) => {
    console.log('DELETE');
    const ticketRef = doc(db, 'tickets', id);
    await deleteDoc(ticketRef);
    setSelectedTicket(null);
    setVisible('list');
  }

  let currentlyVisibleState = null;
  if (auth.currentUser == null) {
    return (
      <h1>You must be signed in to access the queue.</h1>
    )
  } else if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (visible === 'details') {
    currentlyVisibleState = <TicketDetail
                              ticket = {selectedTicket}
                              onClickingDelete = {handleDeletingTicket}
                              onClickingEdit = {handleEditTicketClick}
                              onTicketClicked = { handleChangingSelectedTicket }
                            />
  } else if (visible === 'new-ticket-form') {
    currentlyVisibleState = <NewTicketForm
                              onNewTicketCreation={handleAddingNewTicketToList}
                              onClickingX = { handleChangingSelectedTicket }
                            />;
  } else if (visible === 'edit-ticket-form') {
    currentlyVisibleState = <EditTicketForm
                              ticket = {selectedTicket}
                              onEditTicket={handleUpdatingTicket}
                              onClickingX = { handleChangingSelectedTicket }
                            />
  } else if (visible === 'list') {
    currentlyVisibleState = <React.Fragment>
                              <TicketList
                                ticketList={mainTicketList}
                                onTicketClick={handleChangingSelectedTicket}
                              />
                              <button onClick={handleAddTicketClick} className='btn btn-warning'>Add Ticket</button>
                            </React.Fragment>;
  }
  return (
    <section className='ticketControl'>
      {currentlyVisibleState}
    </section>
  );
}