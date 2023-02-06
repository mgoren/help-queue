import React from 'react';
import PropTypes from 'prop-types';
import Form from './TicketForm';

export default function EditTicketForm({ ticket, onEditTicket, onClickingX }) {
  function handleEditTicketFormSubmission(e) {
    e.preventDefault();
    onEditTicket({
      names: e.target.names.value, 
      location: e.target.location.value, 
      issue: e.target.issue.value, 
      date: ticket.date,
      id: ticket.id
    });
  }
  return (
    <Form 
      formSubmissionHandler={handleEditTicketFormSubmission}
      onClickingX={onClickingX}
      buttonText="Update Ticket"
      ticket={ticket}
    />
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object.isRequired,
  onEditTicket: PropTypes.func.isRequired,
  onClickingX: PropTypes.func.isRequired
};