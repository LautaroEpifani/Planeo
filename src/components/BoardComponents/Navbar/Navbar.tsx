import { useAuth } from "../../../hooks/useAuth";
import styles from "./Navbar.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
const Navbar = () => {
  const { logout } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        {/* <img className={styles.logo} src={logo} alt="Logo" /> */}
        <FaRegPaperPlane className={styles.logo} />´
        <h1 className={styles.title}>Planeo</h1>
      </div>
    
      <button className={styles.buttonCreate}>Create +</button>
      <button className={styles.button} onClick={logout}>
        <AiOutlineLogout />
      </button>
    </div>
  );
};

export default Navbar;
