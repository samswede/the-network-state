
import './App.css';
import NavBar from './components/layout/nav/NavBar.js';
import ActionArea from './components/pages/home/action_area/ActionArea.js';
import ContentBox from './components/pages/home/content_box/ContentBox';
import ContentBoxItem from './components/pages/home/content_box/ContentBoxItem';

function App() {
  return (
    <>
      <header>
        <NavBar websiteTitle={'The Network State'}/>
      </header>
      
      <main>
        <section id="action-section">
          <img id="main-concept-image" alt=''>
          </img>
          <ActionArea />
        </section>
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
              contentItemHeader="In one sentence"/>
            <ContentBoxItem 
              iconID="arrow-down-right-circle" 
              contentItemHeader="In one image"/>
            <ContentBoxItem 
              iconID="arrow-down-right-circle" 
              contentItemHeader="In one thousand words"/>
            <ContentBoxItem 
              iconID="arrow-down-right-circle" 
              contentItemHeader="In one essay"/>
          </ContentBox>
        <section id="content-section">

        </section>
      </main>


      <footer>
      </footer>
    </>
  );
}

export default App;


