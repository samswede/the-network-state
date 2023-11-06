
import './HomePage.css';
import NavBar from '../../layout/nav/NavBar';
import ActionArea from './action_area/ActionArea';
import ContentBox from './content_box/ContentBox';
import ContentBoxItem from './content_box/ContentBoxItem';


function HomePage() {
  return (
    <>
      <header id="home-nav-bar">
        <NavBar websiteTitle={'The Network State'}/>
      </header>
      
      <main id="home-main">
        <div id="responsive">
          <section id="action-section">
            <img id="main-concept-image" alt=''>
            </img>
            <ActionArea />
          </section>
        </div>
        <section id="description">
          <h2>Description</h2>
          <p>Technology has enabled us to start new companies, 
            new communities, and new currencies. 
            But can we use it to start new cities, or even new countries? 
            This book explains how to build the successor to the nation state, 
            a concept we call the network state.</p>
        </section >
          <ContentBox contentHeader="1. Quickstart">
          <ContentBoxItem 
              iconID="arrow-down-right-circle" 
              text="Preamble"
              routePath="/group_1/preamble"/>
            <ContentBoxItem 
              iconID="arrow-down-right-circle" 
              text="In one sentence"
              routePath="/group_1/one_sentence"/>
            <ContentBoxItem 
              iconID="arrow-down-right-circle" 
              text="In one image"
              routePath="/group_1/one_image"/>
            <ContentBoxItem 
              iconID="arrow-down-right-circle" 
              text="In one thousand words"
              routePath="/group_1/one_thousand"/>
            <ContentBoxItem 
              iconID="arrow-down-right-circle" 
              text="In one essay"
              routePath="/group_1/one_essay"/>
          </ContentBox>
        <section id="content-section">

        </section>
      </main>


      <footer>
      </footer>
    </>
  );
}

export default HomePage;