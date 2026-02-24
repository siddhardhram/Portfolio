import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <VisitorCounter />
      </div>
    </Router>
  );
}

export default App;