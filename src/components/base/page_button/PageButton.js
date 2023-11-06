import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './PageButton.css';


function PageButton({ text, routePath, iconID }) {
    let navigate = useNavigate();

    function handleClick() {
      navigate(routePath); // Programmatically navigate to the specified route
    }

  return (
    <div id={"pageButton-" + text + "-" + iconID} onClick={handleClick} className="pageButton">
      <div id={iconID + "-icon"} className="pageButtonIcon"></div>
      <p className="pageButtonText">{text}</p>
    </div>
  );
}

PageButton.propTypes = {
  text: PropTypes.string.isRequired,
  routePath: PropTypes.string.isRequired,
  iconID: PropTypes.string,
};

export default PageButton;
