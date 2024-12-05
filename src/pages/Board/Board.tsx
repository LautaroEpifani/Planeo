import Kanban from "../../components/BoardComponents/Kanban/Kanban";
import Navbar from "../../components/BoardComponents/Navbar/Navbar";
import SecondaryNavbar from "../../components/BoardComponents/SecondaryNavbar/SecondaryNavbar";
import Sidebar from "../../components/BoardComponents/Sidebar/Sidebar";
import styles from "./Board.module.css";

const Board = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.main}>
          <SecondaryNavbar />
          <Kanban />
        </div>
      </div>
    </div>
  );
};

export default Board;
