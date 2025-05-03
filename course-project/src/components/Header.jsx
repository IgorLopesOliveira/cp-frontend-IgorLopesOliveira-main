import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import SearchFilter from './SearchFilter';

function Header({ onSearch, onGenreSelect }) {
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src="/images/logo.png" alt="My Logo" className="logo" />
        </Link>
      </div>
      <div className="header-right">
        {showSearch ? (
          <SearchFilter onSearch={onSearch} />
        ) : (
          <nav>
            <ul className="nav-links">
              <li className="dropdown" onClick={toggleDropdown}>
                <Link to="/">SPROOKJES</Link>
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><a onClick={() => onGenreSelect('')}>All</a></li> 
                    <li><a onClick={() => onGenreSelect('Fantasy')}>Fantasy</a></li>
                    <li><a onClick={() => onGenreSelect('Adventure')}>Adventure</a></li>
                    <li><a onClick={() => onGenreSelect('Horror')}>Horror</a></li>
                    <li><a onClick={() => onGenreSelect('Romance')}>Romance</a></li>
                  </ul>
                )}
              </li>
              <li><Link to="/makingof">MAKING OF</Link></li>
              <li><Link to="/aboutus">ABOUT US</Link></li>
            </ul>
          </nav>
        )}
        <button className="search-icon" onClick={toggleSearch}>🔍</button>
      </div>
    </header>
  );
}

export default Header;
