import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Fortune</Link>
          <ul>
            <li>
              <Link to="/fortune">4 cards fortune</Link>
            </li>
            <li>
              <Link to="/question">1 card fortune</Link>
            </li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
