import React from "react";
import styles from "./Navbar.module.css";
import Cartwidget from "../Cartwidget/Cartwidget";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbarStyle}>
        <img src="/logoconqueror.png" alt="" className={styles.navbarLogo} />
        <ul className={styles.navbarList}>
          <a href="#" className={styles.anchorStyle}>
            <li>Paletas</li>
          </a>
          <a href="#" className={styles.anchorStyle}>
            <li>Zapatillas</li>
          </a>
          <a href="#" className={styles.anchorStyle}>
            <li>Remeras</li>
          </a>
        </ul>
        <Cartwidget />
      </nav>
    </div>
  );
};

export default Navbar;
