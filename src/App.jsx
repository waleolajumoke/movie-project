// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <Router>
      {/* Dark Mode Toggle Button */}
      <DarkModeToggle />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;