import './PageSubtitle.css';

function PageSubtitle( { pageSubtitle }) {
  return (
    <>
        <div className="pageSubheading">
            <div className="pageSubheading__line"></div>
            <h4 className="pageSubheading__text">{pageSubtitle}</h4>
            <div className="pageSubheading__line"></div>
        </div>
    </>

    );
}

export default PageSubtitle;

