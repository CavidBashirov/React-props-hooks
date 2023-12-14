import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
