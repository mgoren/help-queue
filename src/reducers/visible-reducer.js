const reducer = (state = 'list', action) => {
  switch (action.type) {
  case 'NEW_TICKET_FORM':
    return 'new-ticket-form';
  case 'EDIT_TICKET_FORM':
    return 'edit-ticket-form';
  case 'DETAILS':
    return 'details';
  default:
    return 'list';
  }
};

export default reducer;