import './styles/main.css'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './components/project/Project';
import ProjectPage from './pages/ProjectPage';



function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      {/* <Projects/> */}
      <ProjectPage />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;
