import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import { EmailGate } from './components/EmailGate';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <EmailGate />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;