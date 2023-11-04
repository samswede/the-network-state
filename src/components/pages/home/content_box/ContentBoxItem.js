import './ContentBoxItem.css';
import IconButton from '../../../base/icon_button/IconButton';

function ContentBoxItem({iconID, contentItemHeader}) {
    return (
      <div className="contentBox__item">
        <div className="contentBox__itemButton">
          <IconButton iconID={iconID}/>
        </div>
        <h3>{contentItemHeader}</h3>
      </div>
    );
  }
  
export default ContentBoxItem;