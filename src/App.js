import './styles/main.css'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
