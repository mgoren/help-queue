import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Form from './Form';

function NewTicketForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      date: new Date(),
      id: v4()
    });
  }
  return (
    <Form 
      formSubmissionHandler={handleNewTicketFormSubmission}
      whenClickingX={props.onClickingX}
      buttonText="Ayudame!" 
    />
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;