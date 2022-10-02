import { useState } from 'react';
import { Link } from 'react-router-dom';
// Helpers
import { menuItems } from './helpers';
// Css
import './Sidebar.css';

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState('Home');

  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <h3 className="sidebar__title">Dashboard</h3>
        <ul className="sidebar__menuItems">
          {menuItems.map(({ item, icon, path }) => (
            <Link key={item} to={path}>
              <li
                className={`sidebar__item ${activeMenu === item && 'active'}`}
                onClick={() => setActiveMenu(item)}
              >
                {icon}
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
