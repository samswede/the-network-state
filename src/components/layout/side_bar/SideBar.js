import './SideBar.css';
import { useContext } from 'react';
import MenuContext from '../../pages/home/menu_context/MenuContext.js';

function SideBar({children}) {
    const [menuIsVisible, setMenuIsVisible] = useContext(MenuContext);
  return (
        <>
        <div className={menuIsVisible ? "sideBarBox--visible" : "sideBarBox"}>
          {children}
        </div>
        </>
  );
};

export default SideBar;