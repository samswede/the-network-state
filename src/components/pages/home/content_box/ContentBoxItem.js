import './ContentBoxItem.css';
import IconPageButton from '../../../base/icon_button/IconPageButton.js';


function ContentBoxItem({iconID, text, routePath}) {
    return (
      <div className="contentBox__item">
        <div className="contentBox__itemButton">
          <IconPageButton iconID={iconID} routePath={routePath}/>
        </div>
        <h3>{text}</h3>
      </div>
    );
  }
  
export default ContentBoxItem;