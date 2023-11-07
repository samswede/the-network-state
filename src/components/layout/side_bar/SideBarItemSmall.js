import './SideBarItemSmall.css';
import IconPageButton from '../../base/icon_button/IconPageButton';

function SideBarItemSmall({iconID, text, routePath}) {
    return (
      <div className="sideBarBox__item">
        <div className="sideBarBox__itemButton">
          <IconPageButton iconID={iconID} routePath={routePath}/>
        </div>
        <h3>{text}</h3>
      </div>
    );
  }
  
export default SideBarItemSmall;