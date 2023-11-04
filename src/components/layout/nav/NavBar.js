import './NavBar.css';
import IconButton from '../../base/icon_button/IconButton.js';

function NavBar ( { websiteTitle } ) {
  return (
    <>
      <div className="navBar">
          <div className="navBar__Icon" alt="Logo"></div>
          <div className="navBar__Title">
              <h1 className="navBar__TitleText">{websiteTitle}</h1>
          </div>
          <div className="navBar__Button">
              <IconButton iconID="menu" />
          </div>
      </div>
    </>
  )
};

export default NavBar;