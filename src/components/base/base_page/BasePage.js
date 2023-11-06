import './BasePage.css';
import NavBar from '../../layout/nav/NavBar';
import NextPageNavBar from '../../layout/footer/next_page_nav_bar/NextPageNavBar';

function BasePage({
    textNavBar,
    nextPageTitle,
    nextPageRoutePath,
    children}) {
  return (
    <>

      <header id="fixed-nav-bar">
        <NavBar websiteTitle={textNavBar}/>
      </header>

        {children}

      <footer>
        <NextPageNavBar 
          nextPageTitle={nextPageTitle}
          pageButtonText="Back"
          routePath={nextPageRoutePath}/>
      </footer>

    </>
  );
}

export default BasePage;