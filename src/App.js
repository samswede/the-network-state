import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import HomePage from './components/pages/home/HomePage.js';
import ContentPage from './components/pages/content_page/ContentPage.js';
import PagePreamble from './components/pages/group_1/PagePreamble';
import PageOneSentence from './components/pages/group_1/PageOneSentence';


function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage />} />
        <Route 
          path="/content" 
          element={<ContentPage />} />
        <Route 
          path="/group_1/preamble" 
          element={<PagePreamble />} />
        <Route 
          path="/group_1/one_sentence" 
          element={<PageOneSentence />} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
          <Route path="/about">
            <AboutPage />
          </Route>
*/