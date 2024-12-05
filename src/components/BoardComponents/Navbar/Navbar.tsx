import logo from "../../../assets/planeo.png";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { logout } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Logo" /> 
      </div>
      <button className={styles.button} onClick={logout}>
          Logout
        </button>
    </div>
  );
};

export default Navbar;
