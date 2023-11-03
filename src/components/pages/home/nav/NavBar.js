
function NavBar ( { websiteTitle } ) {
  return (
    <>
      <div class="navBar">
          <img class="navBarIcon" alt="Logo">
          </img>
          <div class="navBarLogo">
            <h1 class="navBarLogoText">{websiteTitle}</h1>
          </div>
          <div class="navBarButton">
          </div>
      </div>
      <hr class="navBarDivider"></hr>
    </>
  )
};

export default NavBar;