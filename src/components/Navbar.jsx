import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Job Tracker
          </Link>
          <div className="navbar-links">
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Dashboard
            </Link>
            <Link
              to="/applications"
              className={location.pathname === '/applications' ? 'active' : ''}
            >
              Applications
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

