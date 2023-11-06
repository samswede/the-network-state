import './ContentPage.css';
import NavBar from '../../layout/nav/NavBar';
import PageTitle from './PageTitle.js';
import PageSubtitle from './PageSubtitle.js';
import NextPageNavBar from '../../layout/footer/next_page_nav_bar/NextPageNavBar';

function ContentPage() {
  return (
    <>
      <header>
            <NavBar websiteTitle={'Content Page Title'}/>
      </header>
      
      <main id="contentPage-main">

        <div className="chapterImage">
        </div>

        <PageTitle pageTitle="Chapter Title"/>

        <PageSubtitle pageSubtitle="Chapter Subtitle"/>
        <section className="content">
          <h2>Description</h2>
          <p>Technology has enabled us to start new companies, 
            new communities, and new currencies. 
            But can we use it to start new cities, or even new countries? 
            This book explains how to build the successor to the nation state, 
            a concept we call the network state.</p>
        
        
        </section >

        <NextPageNavBar nextPageTitle="Home" pageButtonText="Back" routePath="/"/>
        
      </main>


      <footer>
      </footer>
    </>
  );
}

export default ContentPage;