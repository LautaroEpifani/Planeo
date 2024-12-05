import styles from "./SecondaryNavbar.module.css";
const SecondaryNavbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
      <button className={styles.button} >
          Title
        </button>
      </div>
      <button className={styles.button} >
          Add +
        </button>
    </div>
  )
}

export default SecondaryNavbar