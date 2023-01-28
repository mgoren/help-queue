import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';

function TicketDetail(props) {
  const { ticket, onClickingDelete } = props;

  const ticketStyles = {
    backgroundColor: 'lightyellow',
    fontFamily: 'sans-serif',
    padding: '25px',
    marginTop: '25px',
    marginBottom: '25px',
    position: 'relative'
  };
  const xStyles = {
    position: 'absolute',
    top: '17px',
    right: '20px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };
  const buttonStyles = {
    marginRight: '10px'
  }

  return (
    <div style={ticketStyles}>
      <span onClick = {() => props.whenTicketClicked(null)} style={xStyles}>X</span>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <p><ReactTimeAgo date={ticket.date} locale="en-US"/></p>
      <button onClick={ props.onClickingEdit } className='btn btn-warning' style={buttonStyles}>Edit</button> 
      <button onClick={()=> onClickingDelete(ticket.id)} className='btn btn-success' style={buttonStyles}>Completed</button>
    </div>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TicketDetail;