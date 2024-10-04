import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/targets">Targets</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;