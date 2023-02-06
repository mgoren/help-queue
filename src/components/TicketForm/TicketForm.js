import React from 'react';
import PropTypes from 'prop-types';
import './TicketForm.scss';

export default function TicketForm({ formSubmissionHandler, onClickingX, buttonText, ticket }) {
  return (
    <section className='ticketForm'>
      <span className='ticketDetail__close' onClick = {() => onClickingX(null)}>X</span>
      <form onSubmit={formSubmissionHandler}>
        <div className='form-group'>
          <label htmlFor='names'>Pair names</label>
          <input type='text' className='form-control' name='names' defaultValue={ticket ? ticket.names : ''} autoFocus required />
        </div>
        <div className='form-group'>
          <label htmlFor='names'>Location</label>
          <input type='text' className='form-control' name='location' defaultValue={ticket ? ticket.location : ''} required />
        </div>
        <div className='form-group'>
          <label htmlFor='names'>Describe your issue</label>
          <textarea name='issue' className='form-control' defaultValue={ticket ? ticket.issue : ''} required />
        </div>
        <button type='submit' className='btn btn-warning'>{buttonText}</button>
      </form>
    </section>
  );
}

TicketForm.propTypes = {
  ticket: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};