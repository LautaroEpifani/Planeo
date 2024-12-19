import logo from "../../assets/planeo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
