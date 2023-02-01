import React from 'react';
import PropTypes from 'prop-types';
import Form from './TicketForm';

export default function NewTicketForm({ onNewTicketCreation, onClickingX }) {
  function handleNewTicketFormSubmission(e) {
    e.preventDefault();
    onNewTicketCreation({
      names: e.target.names.value, 
      location: e.target.location.value, 
      issue: e.target.issue.value, 
      date: new Date()
    });
  }
  return (
    <Form 
      formSubmissionHandler={handleNewTicketFormSubmission}
      onClickingX={onClickingX}
      buttonText="Ayudame!" 
    />
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func.isRequired,
  onClickingX: PropTypes.func.isRequired
};