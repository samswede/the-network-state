
import './App.css';
import NavBar from './components/pages/home/nav/NavBar.js';
import ActionArea from './components/pages/home/action_area/ActionArea.js';

function App() {
  return (
    <>
      <header>
        <NavBar websiteTitle={'The Network State'}/>
      </header>
      
      <main>
        <section id="action-section">
          <img id="main-concept-image">
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
          <ActionArea />
          <ActionArea />
          <ActionArea />
          <ActionArea />
        <section id="content-section">

        </section>
      </main>


      <footer>
      </footer>
    </>
  );
}

export default App;




function yourClickHandler() {
  console.log('Hello!');
}