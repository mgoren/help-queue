import visibleReducer from './visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  visible: visibleReducer,
  mainTicketList: ticketListReducer
});

export default rootReducer;