import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import NewTicketForm from './NewTicketForm';
import EditTicketForm from './EditTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: null,
      visible: 'list'
    };
  }

  handleAddTicketClick = () => {
    this.setState({ visible: 'new-ticket-form' });
  }

  handleEditTicketClick = () => {
    this.setState({ visible: 'edit-ticket-form' });
  }

  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props;
    const { id, names, location, issue, date } = newTicket;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue,
      date: date
    }
    dispatch(action);
    this.setState({ visible: 'list' });
  }

  handleUpdatingTicket = (updatedTicket) => {
    const { dispatch } = this.props;
    const { id, names, location, issue, date } = updatedTicket;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue,
      date: date
    }
    dispatch(action);
    this.setState({
      selectedTicket: null,
      visible: 'list'
    });
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedTicket: null,
      visible: 'list'
    });
  }

  handleChangingSelectedTicket = (id) => {
    if (id) {
      const selectedTicket = this.props.mainTicketList[id];
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
                                  ticketList={this.props.mainTicketList} 
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

TicketControl.propTypes = {
  mainTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainTicketList: state
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);
export default TicketControl;