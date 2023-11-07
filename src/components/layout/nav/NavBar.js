import './NavBar.css';
import IconButton from '../../base/icon_button/IconButton.js';
import MenuContext from '../../pages/home/menu_context/MenuContext';
import { useContext } from 'react';

function NavBar ( { websiteTitle } ) {
  const [menuIsVisible, setMenuIsVisible] = useContext(MenuContext);
  const handleClick = () => {
    setMenuIsVisible(!menuIsVisible);
    console.log(menuIsVisible)
  }
  return (
    <>
      <div className="navBar">
          <div className="navBar__Icon" alt="Logo"></div>
          <div className="navBar__Title">
              <h1 className="navBar__TitleText">{websiteTitle}</h1>
          </div>
          <div className="navBar__Button">
              <IconButton iconID="menu" handleClick={handleClick}/>
          </div>
      </div>
    </>
  )
};


export default NavBar;