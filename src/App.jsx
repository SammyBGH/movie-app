import './css/App.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { useState } from 'react';
import Footer from './Components/Footer';

function App() {
  const [resetHome, setResetHome] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setResetHome((prev) => !prev);
    navigate('/');
  };

  return (
    <div>
      <NavBar onHomeClick={handleHomeClick} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home resetTrigger={resetHome} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
