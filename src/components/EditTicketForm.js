import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

function EditTicketForm(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      date: ticket.date,
      id: ticket.id
    });
  }
  return (
    <Form 
      formSubmissionHandler={handleEditTicketFormSubmission}
      whenClickingX={props.onClickingX}
      buttonText="Update Ticket"
    />
  );
}

EditTicketForm.propTypes = {
  onEditTicket: PropTypes.func
};

export default EditTicketForm;