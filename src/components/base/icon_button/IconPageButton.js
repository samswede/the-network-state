import IconButton from "./IconButton.js";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



function IconPageButton({ iconID, routePath }) {
    let navigate = useNavigate();

    function handleClick() {
      navigate(routePath);
    }

  return (
    <IconButton iconID={iconID} handleClick={handleClick} />
  );
}

IconPageButton.propTypes = {
    iconID: PropTypes.string.isRequired,
    routePath: PropTypes.string.isRequired,
  
};

export default IconPageButton;
