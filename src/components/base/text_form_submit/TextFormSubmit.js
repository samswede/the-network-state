import PropTypes from 'prop-types';
import './TextFormSubmit.css';

function TextFormSubmit({ id, submitText, inputType, placeHolder }) {
  return (
    <form 
      className="textFormSubmit" 
      id={id} >
      <div className="textFormSubmitInput">
        <input 
          type={inputType}
          placeholder={placeHolder} />
      </div>
      
      <button 
        className="textFormSubmitButton" 
        id="" > 
        {submitText} 
      </button>
    
    </form>
  );
}


TextFormSubmit.propTypes = {
  id: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
};

export default TextFormSubmit;
