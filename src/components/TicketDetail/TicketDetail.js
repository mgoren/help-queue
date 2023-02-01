import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import './TicketDetail.css';

export default function TicketDetail({ ticket, onClickingDelete, onTicketClicked, onClickingEdit }) {
  return (
    <section className='ticketDetail'>
      <span className='ticketDetail__close' onClick = {() => onTicketClicked(null)}>X</span>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <p><ReactTimeAgo date={ticket.date} locale="en-US"/></p>
      <button onClick={ onClickingEdit } className='btn btn-warning'>Edit</button> 
      <button onClick={()=> onClickingDelete(ticket.id)} className='btn btn-success'>Completed</button>
    </section>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object.isRequired,
  onClickingEdit: PropTypes.func.isRequired,
  onClickingDelete: PropTypes.func.isRequired,
  onTicketClicked: PropTypes.func.isRequired
};