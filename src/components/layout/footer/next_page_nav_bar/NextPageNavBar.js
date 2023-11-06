import './NextPageNavBar.css';
import PageButton from '../../../base/page_button/PageButton';


function NextPageNavBar ( { nextPageTitle, pageButtonText, routePath } ) {
  return (
    <>
      <div className="nextPageNavBar">
          <div >
            <div className="nextPageNavBar__textBox">
              <h3>Next Page:</h3>
              <p>{nextPageTitle}</p>
            </div>
          </div>

          <div className="nextPageNavBar__buttonBox">
              <PageButton text={pageButtonText} routePath={routePath} iconID="chevron-left"/>
          </div>
      </div>
    </>
  )
};

export default NextPageNavBar;