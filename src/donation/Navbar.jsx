import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <img id="logo" src={logo} alt="Logo" />
      </div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/ngos">NGOs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
