import { Link } from 'react-router-dom';
// React icons
import { RiGovernmentFill } from 'react-icons/ri';
// Css
import './topbar.css';

export default function Topbar() {
  return (
    <div className="topbar">
      <Link to="/">
        <div className="topbar__logo">
          <RiGovernmentFill className="topbar__icon" />
          <span className="topbar__title">WareHouse Royale</span>
        </div>
      </Link>
      <Link to="/user">
        <div className="topbar__user">
          <img
            src="https://asu.pure.elsevier.com/files-asset/129976187/tkull.png?w=160&f=webp"
            alt=""
            className="topbar__userImage"
          />{' '}
          <span className="topbar__username">Hi, Professor</span>
        </div>
      </Link>
    </div>
  );
}
