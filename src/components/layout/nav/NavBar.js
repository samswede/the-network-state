import './NavBar.css';

function NavBar ( { websiteTitle } ) {
  return (
    <>
      <div className="navBar">
          <div className="navBar__Icon" alt="Logo"></div>
          <div className="navBar__Title">
            <h1 className="navBar__TitleText">{websiteTitle}</h1>
          </div>
          <div className="navBar__Button"></div>
      </div>
    </>
  )
};

export default NavBar;