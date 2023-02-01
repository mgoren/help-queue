import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import './Ticket.css';

export default function Ticket({ id, names, location, issue, date, whenTicketClicked }) {
  return (
    <section className='ticket' onClick = {() => whenTicketClicked(id)}>
      <h3>{location} - {names}</h3>
      <p><em>{issue}</em></p>
      <p><ReactTimeAgo date={date} locale="en-US"/></p>
    </section>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  id: PropTypes.string.isRequired,
  whenTicketClicked: PropTypes.func.isRequired
};