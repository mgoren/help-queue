import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';

export default function AuthForm ({ formName, onAuthFormSubmit} ) {
  return (
    <section className={camelCase(formName)}>
    <h1>{formName}</h1>
    <div className="row">
      <div className="col-md-6">
        <form onSubmit={onAuthFormSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" className="form-control" autoFocus="autoFocus" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary">{formName}</button>
        </form>
      </div>
    </div>
    </section>
  );
}

AuthForm.propTypes = {
  formName: PropTypes.string.isRequired,
  onAuthFormSubmit: PropTypes.func.isRequired
};