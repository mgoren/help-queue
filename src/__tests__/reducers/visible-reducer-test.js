import visibleReducer from '../../reducers/visible-reducer';

describe("visibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(visibleReducer(undefined, { type: null })).toEqual('list');
  });

  test('Should set visibility state to new-ticket-form', () => {
    expect(visibleReducer(undefined, { type: 'NEW_TICKET_FORM' })).toEqual('new-ticket-form');
  });

  test('Should set visibility state to edit-ticket-form', () => {
    expect(visibleReducer(undefined, { type: 'EDIT_TICKET_FORM' })).toEqual('edit-ticket-form');
  });

  test('Should set visibility state to details', () => {
    expect(visibleReducer(undefined, { type: 'DETAILS' })).toEqual('details');
  });
});