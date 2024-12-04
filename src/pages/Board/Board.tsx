import { useAuth } from '../../hooks/useAuth'
import styles from './Board.module.css'

const Board = () => {

  const { logout } = useAuth();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BOARD</h1>
      <button className={styles.button} onClick={logout}>Logout</button>
    </div>
  )
}

export default Board