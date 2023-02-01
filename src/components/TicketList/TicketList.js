import React from 'react';
import PropTypes from 'prop-types';
import Ticket from '../Ticket';

export default function TicketList({ ticketList, onTicketClick }) {
  return (
    <section className='ticketList'>
      {ticketList.map( (ticket) => 
        <Ticket
          whenTicketClicked = { onTicketClick }
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          date={ticket.date}
          id={ticket.id}
          key={ticket.id}
        />
      )}
    </section>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array.isRequired,
  onTicketClick: PropTypes.func.isRequired
};