import React from 'react';
import PropTypes from 'prop-types';

function Form(props) {
  const formStyles = {
    position: 'relative',
    background: 'lightyellow',
    padding: '25px'
  };
  const xStyles = {
    position: 'absolute',
    top: '17px',
    right: '20px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };
  const formGroupStyles = {
    marginTop: '15px',
    marginBottom: '15px',
    width: '96%'
  };
  
  return (
    <div style={formStyles}>
      <span style={xStyles} onClick = {() => props.whenClickingX(null)}>X</span>
      <form onSubmit={props.formSubmissionHandler}>
        <div className='form-group' style={formGroupStyles}>
          <input type='text' className='form-control' name='names' placeholder='Pair Names' autoFocus />
        </div>
        <div className='form-group' style={formGroupStyles}>
          <input type='text' className='form-control' name='location' placeholder='Location' />
        </div>
        <div className='form-group' style={formGroupStyles}>
          <textarea name='issue' className='form-control' placeholder='Describe your issue.' />
        </div>
        <button type='submit' className='btn btn-warning'>{props.buttonText}</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default Form;