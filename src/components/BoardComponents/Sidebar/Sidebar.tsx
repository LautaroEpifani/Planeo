import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <h2>Tableros</h2>
        <ul>
          <li>Miembros</li>
          <li>Ajustes</li>
        </ul>
      </div>
      
      <div className={styles.section}>
        <h2>Mis Tableros</h2>
        <div className={styles.tablero}>
          <p>Tablero: <strong>Mi Tablero</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
