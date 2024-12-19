import { AiOutlineDelete } from "react-icons/ai";
import { Project } from "../../../types/types";
import styles from "./Sidebar.module.css";
import { useState } from "react";
import CreateButton from "../CreateButton/CreateButton";

interface Props {
  projects: Project[];
  setActiveProject: (id: number) => void;
  deleteProject: (id: number) => void;
  addProject: (project: Project) => void;
  activeProject: Project | null;
}

const Sidebar = ({
  projects,
  setActiveProject,
  deleteProject,
  activeProject,  
  addProject,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  async function deleteProjectRequest(projectId: number) {
    try {
      const response = await fetch(
        `https://planeo-test-deploy-backend.onrender.com/projects/${projectId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar el proyecto");
      }
      const data = await response.json();
      setIsModalOpen(false);
      deleteProject(projectId);
      console.log(data.message);
    } catch (error) {
      if (error) console.error("Error:", error);
    }
 
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <CreateButton addProject={addProject} />
      </div>
      <div className={styles.section}>
        <h2>Project</h2>
        {projects.length > 0 && (
          <ul>
            <li>Members</li>
            <li>Settings</li>
          </ul>
        )}
      </div>

      <div className={styles.section}>
        <h2>My Projects</h2>
        {projects.map((project) => (
          <div key={project.id}>
            <button
              onClick={() => setActiveProject(project.id)}
              className={styles.button}
            >
              <strong className={styles.name}>{project.name}</strong>
              <AiOutlineDelete
                className={styles.icon}
                onClick={() => setIsModalOpen(true)}
              />
            </button>
            <div>
              {isModalOpen && project.id === activeProject?.id &&  (
                <div className={styles.modalOverlay}>
                  <div className={styles.modal}>
                    <h2>¿Delete Project?</h2>
                    <button
                      className={styles.red}
                      onClick={() => deleteProjectRequest(project.id)}
                    >
                      Delete
                    </button>
                    <button onClick={() => setIsModalOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
