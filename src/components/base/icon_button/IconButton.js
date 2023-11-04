
import './IconButton.css';


const IconButton = ({ iconID, handleClick }) => {
  return (
    <div className="iconButtonContainer">
      <button className="iconButton" onClick={handleClick}>
        <span className="iconButton__Icon" id={iconID}></span>
      </button>
    </div>
  );
};

export default IconButton;
