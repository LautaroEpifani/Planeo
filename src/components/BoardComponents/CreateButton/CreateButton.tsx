import React, { useState } from "react";
import styles from "./CreateButton.module.css";
import { Project } from "../../../types/types";
import { useAuth } from "../../../hooks/useAuth";

interface Props {
  addProject: (project: Project) => void;
}

const CreateButton = ({ addProject }: Props) => {
    const { userLogged } = useAuth();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [projectName, setProjectName] = useState<string>("");

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
      const userId = userLogged?.id; //pasariamos el userID del usuario logueado
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
        setIsModalOpen(false);
        addProject(data);
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
      <button
        onClick={handleCreateProjectClick}
        className={styles.buttonCreate}
      >
        Create new project
      </button>
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Create Project</h2>
            <input
              type="text"
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

export default CreateButton;
