import styles from "./SecondaryNavbar.module.css";
import { TbUserShare } from "react-icons/tb";
const SecondaryNavbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <h1 className={styles.h1}>React Goats</h1>
      </div>
      <button className={styles.button}>
        <span className={styles.icon}><TbUserShare /></span>
        <span className={styles.text}>Compartir</span>
      </button>
    </div>
  );
};

export default SecondaryNavbar;
