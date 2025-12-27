import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Applications from './pages/Applications';

function App() {
  return (
    <JobProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </div>
      </Router>
    </JobProvider>
  );
}

export default App;

