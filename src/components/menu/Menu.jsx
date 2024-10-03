import React from 'react';
import '../../Styles/Components/Menu/menu.css';
import { Link, NavLink } from 'react-router-dom';  

export default function Menu() {
  return (
    <div>
      <div className="nav">
        <h2>Logo</h2>
        <ul>
          <li>
            <NavLink 
              to="/"
              className={({ isPending, isActive }) => 
                isPending ? "pending" : isActive ? "active" : ''
              }
            > 
              Home 
            </NavLink> 
            <NavLink  className={({ isPending, isActive }) => 
                isPending ? "pending" : isActive ? "active" : ''
              } to="/Contact">Contact</NavLink>
            <NavLink className={({ isPending, isActive }) => 
                isPending ? "pending" : isActive ? "active" : ''
              } to="/About">About</NavLink>
            <NavLink className={({ isPending, isActive }) => 
                isPending ? "pending" : isActive ? "active" : ''
              } to="/Services">Services</NavLink>
          </li>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
}
