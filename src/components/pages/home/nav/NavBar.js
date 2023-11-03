import './NavBar.css';

function NavBar ( { websiteTitle } ) {
  return (
    <>
      <div className="navBar">
          <div className="navBarIcon" alt="Logo"></div>
          <p className="navBarLogoText">{websiteTitle}</p>
          <div className="navBarButton"></div>
      </div>
      <hr className="navBarDivider" />
    </>
  )
};

export default NavBar;