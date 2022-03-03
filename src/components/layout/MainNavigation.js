import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className={classes.image} />
        </Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/searching-page"> Searching Page </Link>
          </li>
          <li>
            <Link to="/favourites-page"> Favourites </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
