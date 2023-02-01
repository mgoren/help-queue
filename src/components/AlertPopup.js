import useAlert from '../useAlert';

const AlertPopup = () => {
  const { text, type } = useAlert();

  if (text && type) {
    return (
      <div className={`alertPopup alert ${type}`} role='alert'>
        {text}
      </div>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;