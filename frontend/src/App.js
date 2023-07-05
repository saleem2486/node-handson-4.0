import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import CompRouter from './AppRoutes/compRouter';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CompRouter/>
      <Footer/>
    </div>
  );
}

export default App;
