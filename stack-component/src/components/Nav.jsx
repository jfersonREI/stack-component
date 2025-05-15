import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">Single-Value Demo</Link>
      <Link to="/responsive">Responsive Demo</Link>
    </nav>
  );
}

export default Nav;
