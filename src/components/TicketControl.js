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
      selectedTicket: null
    };
  }

  handleAddTicketClick = () => {
    this.props.dispatch({ type: 'NEW_TICKET_FORM' });
  }

  handleEditTicketClick = () => {
    this.props.dispatch({ type: 'EDIT_TICKET_FORM' });
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
    dispatch({ type: 'LIST' });
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
    this.setState({ selectedTicket: null });
    dispatch({ type: 'LIST' });
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    dispatch({ type: 'DELETE_TICKET', id: id });
    dispatch({ type: 'LIST' });
    this.setState({ selectedTicket: null });
  }

  handleChangingSelectedTicket = (id) => {
    const { dispatch } = this.props;
    if (id) {
      this.setState({ selectedTicket: this.props.mainTicketList[id] });
      dispatch({ type: 'DETAILS' });
    } else {
      this.setState({ selectedTicket: null });
      dispatch({ type: 'LIST' });
    }
  }

  render() {
    let currentlyVisibleState = null;
    if (this.props.visible === 'details') {
      currentlyVisibleState = <TicketDetail 
                                ticket = {this.state.selectedTicket} 
                                onClickingDelete = {this.handleDeletingTicket} 
                                onClickingEdit = {this.handleEditTicketClick}
                                whenTicketClicked = { this.handleChangingSelectedTicket }
                              />
    } else if (this.props.visible === 'new-ticket-form') {
      currentlyVisibleState = <NewTicketForm 
                                onNewTicketCreation={this.handleAddingNewTicketToList} 
                                onClickingX = { this.handleChangingSelectedTicket }
                              />;
    } else if (this.props.visible === 'edit-ticket-form') {
      currentlyVisibleState = <EditTicketForm
                                ticket = {this.state.selectedTicket}
                                onEditTicket={this.handleUpdatingTicket}
                                onClickingX = { this.handleChangingSelectedTicket }
                              />
    } else if (this.props.visible === 'list') {
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
  mainTicketList: PropTypes.object.isRequired,
  visible: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    mainTicketList: state.mainTicketList,
    visible: state.visible
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);
export default TicketControl;