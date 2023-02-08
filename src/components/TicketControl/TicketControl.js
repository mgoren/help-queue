import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import NewTicketForm from '../TicketForm/NewTicketForm';
import EditTicketForm from '../TicketForm/EditTicketForm';
import TicketList from '../TicketList';
import TicketDetail from '../TicketDetail';
import Footer from '../Footer';
import './TicketControl.scss';

export default function TicketControl({ user, setUser }) {
  const [visible, setVisible] = useState('list');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [mainTicketList, setMainTicketList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // listen to auth state changes so it actually refreshes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user ? user : null)
    });
    return () => unsubscribe();
  }, [setUser]);

  useEffect(() => {
    const q = query(collection(db, 'tickets'), orderBy('date'));
    const unsubscribe = onSnapshot( // listen for changes to that query on that collection
      q, (querySnapshot) => {
        const tickets = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          tickets.push({ ...doc.data(), date: doc.data().date.toDate(), id: doc.id });
        });
        setMainTicketList(tickets);
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
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

  const handleAddingNewTicket = async (newTicketData) => {
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

  if (isLoading) {
    currentlyVisibleState = <></>;
  } else if (user == null) {
    currentlyVisibleState = <h1>You must be signed in to access the queue.</h1>;
  } else if (error) {
    currentlyVisibleState = <h1>There was an error: {error}</h1>;
  } else if (visible === 'details') {
    currentlyVisibleState = <TicketDetail
                              ticket = {selectedTicket}
                              onClickingDelete = {handleDeletingTicket}
                              onClickingEdit = {handleEditTicketClick}
                              onTicketClicked = { handleChangingSelectedTicket }
                            />
  } else if (visible === 'new-ticket-form') {
    currentlyVisibleState = <NewTicketForm
                              onNewTicketCreation={handleAddingNewTicket}
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
                              <div className="d-grid gap-2">
                                <button onClick={handleAddTicketClick} className='btn btn-block btn-lg btn-info'>Add Ticket</button>
                              </div>
                              <TicketList
                                ticketList={mainTicketList}
                                onTicketClick={handleChangingSelectedTicket}
                              />
                              <Footer />
                            </React.Fragment>;
  }
  return (
    <section className='ticketControl'>
      {currentlyVisibleState}
    </section>
  );
}