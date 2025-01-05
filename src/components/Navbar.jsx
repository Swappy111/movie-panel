import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <nav>
        <div className='main'>
      <h1>MovieDb</h1>

      

      <form onSubmit={handleSearch}>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <button className='close-menu' onClick={closeMenu} aria-label="Close menu">✖</button>
        <li><NavLink to="/" onClick={closeMenu}>Popular</NavLink></li>
        <li><NavLink to="/top-rated" onClick={closeMenu}>Top Rated</NavLink></li>
        <li><NavLink to="/upcoming" onClick={closeMenu}>Upcoming</NavLink></li>
      </ul>
      
        <input
          type="text"
          className='searchbox'
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search movies"
        />
        <button className='searchbutton' type="submit" aria-label="Search"><span>Search</span></button>

      </form>
      <button className='menu-toggle' onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
