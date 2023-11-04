import './ContentBox.css';
import ContentBoxItem from './ContentBoxItem.js';

function ContentBox({contentHeader, children}) {
  return (
        <>
        <h2>{contentHeader}</h2>
        <div className="contentBox">
          {children}
        </div>
        </>
  );
}

export default ContentBox;


/*
function ContentBox({contentHeader, children}) {
  return (
        <>
        <h2>{contentHeader}</h2>
        <div className="contentBox">
          {children}
          <ContentBoxItem 
            iconID="arrow-down-right-circle" 
            contentItemHeader="In one sentence"/>
          <ContentBoxItem 
            iconID="arrow-down-right-circle" 
            contentItemHeader="In one image"/>
          <ContentBoxItem 
            iconID="arrow-down-right-circle" 
            contentItemHeader="In one paragraph"/>
        </div>
        </>
  );
}

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

export default ContentBox;

*/




/*
//
export default function App() {
  return (
    <>
      <Comment username="Sam" time={(new Date().toString())} >
        <h1>Hello I am a child</h1>
        <p>I am also a child</p>
        <h2>I am a child too</h2>

      </Comment>
    </>
  );
};

function Comment({username, time, children}) {
  return (
    <section>
      <p>{username} commented at {time}</p>
      {children}
    </section>
  )
};

*/