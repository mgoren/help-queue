import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';

function Ticket(props) {

  const ticketStyles = {
    backgroundColor: 'lightyellow',
    fontFamily: 'sans-serif',
    padding: '25px',
    marginTop: '25px',
    marginBottom: '25px',
    cursor: 'pointer'
  }
  
  return (
    <div style={ticketStyles} onClick = {() => props.whenTicketClicked(props.id)}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p><ReactTimeAgo date={props.date} locale="en-US"/></p>
    </div>
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

export default Ticket;