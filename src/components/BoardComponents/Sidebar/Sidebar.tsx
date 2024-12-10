import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <h2>Boards</h2>
        <ul>
          <li>Members</li>
          <li>Settings</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>My Boards</h2>
        <div className={styles.board}>
          <p>
            <strong>React Goats</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
