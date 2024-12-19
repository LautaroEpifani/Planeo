import styles from "./SecondaryNavbar.module.css";
import { TbUserShare } from "react-icons/tb";

interface Props {
  projectName: string | undefined;
}

const SecondaryNavbar = ({ projectName }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <h1 className={styles.h1}>{projectName}</h1>
      </div>
      <button className={styles.button}>
        <span className={styles.icon}>
          <TbUserShare />
        </span>
        <span className={styles.text}>Invite</span>
      </button>
    </div>
  );
};

export default SecondaryNavbar;
