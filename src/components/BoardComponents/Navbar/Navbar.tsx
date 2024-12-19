import React, { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import styles from "./Navbar.module.css";
import { useAuth } from "../../../hooks/useAuth";

type NavbarProps = {
  setIsProjectCreated: (status: boolean) => void;
  setProjectName: (name: string) => void;
  projectName: string;
};

const Navbar: React.FC<NavbarProps> = ({
  setIsProjectCreated,
  projectName,
  setProjectName,
}) => {
  const { logout } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCreateProjectClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const handleSubmit = async () => {
    if (projectName.trim() === "") {
      alert("Project name can´t be empty");
      return;
    }

    try {
      const userId = 11;
      const response = await fetch("https://planeo-test-deploy-backend.onrender.com/createProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          projectName: projectName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsProjectCreated(true);
        setIsModalOpen(false);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error al crear el proyecto", error);
      alert("Hubo un problema al crear el proyecto.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <FaRegPaperPlane className={styles.logo} />
        <h1 className={styles.title}>Planeo</h1>
      </div>

      <button
        onClick={handleCreateProjectClick}
        className={styles.buttonCreate}
      >
        Create +
      </button>
      <div className={styles.user}>
        <h1>UR</h1>
      </div>
      <button className={styles.logout} onClick={logout}>
        <AiOutlineLogout />
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Create Project</h2>
            <input
              type="text"
              value={projectName}
              onChange={handleInputChange}
              placeholder="Project name"
            />
            <button onClick={handleSubmit}>Create</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
