import styles from "./Home.module.css";
import team from "../../assets/teams.svg";
import ReactHookForm from "../../components/ReactHookForm/ReactHookForm";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <section className={styles.formSection}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            Planeo, organiza tus actividades, equipos, tareas y más
          </h1>
          <p className={styles.paragraph}>
            Comienza a organizar todo fácilmente con Planeo.
          </p>
          <ReactHookForm />
        </div>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={team} alt="Equipo" />
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
