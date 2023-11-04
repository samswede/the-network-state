import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import HomePage from './components/pages/home/HomePage.js';
import ContentPage from './components/pages/content_page/ContentPage.js';


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