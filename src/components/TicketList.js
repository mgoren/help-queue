import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
  return (
    <React.Fragment>
      {Object.values(props.ticketList).map( (ticket) => 
        <Ticket
          whenTicketClicked = { props.onTicketClick }
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          date={ticket.date}
          id={ticket.id}
          key={ticket.id}
        />
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};

export default TicketList;