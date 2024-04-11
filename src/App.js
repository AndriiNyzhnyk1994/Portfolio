import './styles/main.css'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './components/project/Project';
import ProjectPage from './pages/ProjectPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/project' element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
