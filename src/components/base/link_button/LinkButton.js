import PropTypes from 'prop-types';
import './LinkButton.css';


function LinkButton({ iconID, text, linkURL }) {
  const navigateToUrl = () => {
    /* This redirects to new link */
    /*
    window.location.href = linkURL;
    */
    
    /* This opens the link in a new window */
    window.open(linkURL, '_blank');
  };


  return (
    <div id={"button-" + iconID} onClick={navigateToUrl} className="linkButton">
      <div id={iconID + "-icon"} className="linkButtonIcon"></div>
      <p id="linkButtonText">{text}</p>
    </div>
  );
}

LinkButton.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkURL: PropTypes.string.isRequired,
};

export default LinkButton;
