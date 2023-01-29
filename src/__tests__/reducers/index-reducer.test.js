import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import visibleReducer from '../../reducers/visible-reducer';
import ticketListReducer from '../../reducers/ticket-list-reducer';


describe("rootReducer", () => {
  let store = createStore(rootReducer);

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainTicketList: {},
      visible: 'list'
    });
  });

  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of visibleReducer matches root reducer', () => {
    expect(store.getState().visible).toEqual(visibleReducer(undefined, { type: null }));
  });

  test('Check that ADD_TICKET action works for ticketListReducer and root reducer', () => {
    const action = {
      type: 'ADD_TICKET',
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      date: new Date(),
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for visibleReducer and root reducer', () => {
    const action = {
      type: 'NEW_TICKET_FORM'
    }
    store.dispatch(action);
    expect(store.getState().visible).toEqual(visibleReducer(undefined, action));
  });
  
});
