import logo from "../../assets/planeo.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default NavBar;
