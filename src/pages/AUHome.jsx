import React from 'react';
import '../css/AUHome.css'
import { Link } from 'react-router-dom'; //<Link to="/user">

function HomePage() {
  return (
    <div>
      <div className="button-container">
        <Link to="/admin">
          <button>
          <Link to="/adminlogin">ADMIN</Link>
          </button>
        </Link>
        <Link to="/user">
          <button> <Link to="/userlogin">USER</Link><br /></button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
