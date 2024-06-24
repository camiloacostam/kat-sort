import { useState } from "react";
// Router
import { Link } from "react-router-dom";
//Styles
import styles from "./nav-bar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} bg-gray-100`}>
      <div className={styles.container}>
        <div className={styles.logo}>KatSort</div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>
        <ul className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
          <li className={styles.menuItem}>
            <Link className={`${styles.link} font-semibold`} to="/">
              Mis Pruebas
            </Link>
          </li>
          <li>
            <Link
              className={`  text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none `}
              to="/Crear-prueba"
            >
              Crear Prueba
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
