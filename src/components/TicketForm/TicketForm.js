import React from 'react';
import PropTypes from 'prop-types';
import './TicketForm.css';

export default function TicketForm({ formSubmissionHandler, onClickingX, buttonText }) {
  return (
    <section className='ticketForm'>
      <span className='ticketDetail__close' onClick = {() => onClickingX(null)}>X</span>
      <form onSubmit={formSubmissionHandler}>
        <div className='form-group'>
          <input type='text' className='form-control' name='names' placeholder='Pair Names' autoFocus />
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' name='location' placeholder='Location' />
        </div>
        <div className='form-group'>
          <textarea name='issue' className='form-control' placeholder='Describe your issue.' />
        </div>
        <button type='submit' className='btn btn-warning'>{buttonText}</button>
      </form>
    </section>
  );
}

TicketForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};