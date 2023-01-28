import React from 'react';
import NewTicketForm from './NewTicketForm';
import EditTicketForm from './EditTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainTicketList: [],
      selectedTicket: null,
      visible: 'list'
    };
  }

  handleAddTicketClick = () => {
    console.log('ADD_CLICK');
    this.setState({ visible: 'new-ticket-form' });
  }

  handleEditTicketClick = () => {
    console.log('EDIT_CLICK');
    this.setState({ visible: 'edit-ticket-form' });
  }

  handleAddingNewTicketToList = (newTicket) => {
    console.log('ADD_NEW');
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({ 
      mainTicketList: newMainTicketList,
      visible: 'list'
    });
  }

  handleUpdatingTicket = (updatedTicket) => {
    console.log('UPDATE');
    const editedMainTicketList = this.state.mainTicketList.filter(ticket => 
      ticket.id !== this.state.selectedTicket.id)
      .concat(updatedTicket);
    this.setState({
      mainTicketList: editedMainTicketList,
      selectedTicket: null,
      visible: 'list'
    });
  }

  handleChangingSelectedTicket = (id) => {
    console.log('SELECT');
    if (id) {
      const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
      this.setState({ 
        selectedTicket: selectedTicket,
        visible: 'details'
      });
    } else {
      this.setState({ 
        selectedTicket: null,
        visible: 'list'
      });
    }
  }

  handleDeletingTicket = (id) => {
    console.log('DELETE');
    const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);
    this.setState({
      mainTicketList: newMainTicketList,
      selectedTicket: null,
      visible: 'list'
    });
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.visible === 'details') {
      currentlyVisibleState = <TicketDetail 
                                ticket = {this.state.selectedTicket} 
                                onClickingDelete = {this.handleDeletingTicket} 
                                onClickingEdit = {this.handleEditTicketClick}
                                whenTicketClicked = { this.handleChangingSelectedTicket }
                              />
    } else if (this.state.visible === 'new-ticket-form') {
      currentlyVisibleState = <NewTicketForm 
                                onNewTicketCreation={this.handleAddingNewTicketToList} 
                                onClickingX = { this.handleChangingSelectedTicket }
                              />;
    } else if (this.state.visible === 'edit-ticket-form') {
      currentlyVisibleState = <EditTicketForm
                                ticket = {this.state.selectedTicket}
                                onEditTicket={this.handleUpdatingTicket}
                                onClickingX = { this.handleChangingSelectedTicket }
                              />
    } else if (this.state.visible === 'list') {
      currentlyVisibleState = <React.Fragment>
                                <TicketList 
                                  ticketList={this.state.mainTicketList} 
                                  onTicketClick={this.handleChangingSelectedTicket} 
                                />
                                <button onClick={this.handleAddTicketClick} className='btn btn-warning'>Add Ticket</button>
                              </React.Fragment>;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TicketControl;