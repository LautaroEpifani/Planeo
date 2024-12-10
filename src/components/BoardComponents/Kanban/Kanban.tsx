import React, { useRef, useState } from "react";
import styles from "./Kanban.module.css";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { useCards } from "../../../hooks/useCards";
import { ImCancelCircle } from "react-icons/im";
import { NewCard } from "../../../types/types";

const Kanban: React.FC = () => {
  const { cards, createCard, deleteCard, updateCards } = useCards();

  const columns: ("todo" | "in-progress" | "done")[] = [
    "todo",
    "in-progress",
    "done",
  ];

  const [draggedTaskId, setDraggedTaskId] = useState<number | null>(null); // ID de la tarea arrastrada
  const [draggedPosition, setDraggedPosition] = useState<
    "before" | "after" | "column" | null
  >(null); // Posición de la tarea
  const lastTargetRef = useRef<HTMLElement | null>(null);

  const handleDragStart = (e: React.DragEvent, taskId: number): void => {
    const taskIdString = taskId.toString();
    e.dataTransfer.setData("taskId", taskIdString);
  };

  const handleDrop = (
    e: React.DragEvent,
    column: "todo" | "in-progress" | "done"
  ): void => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData("taskId"), 10);

    const task = cards.find((task) => task.id === taskId);
    if (!task) return;

    console.log(draggedPosition);
    console.log(draggedTaskId);

    // Si la tarea está en la misma columna, no hacemos nada
    if (task.status === column && taskId === draggedTaskId) {
      setDraggedPosition(null);
      setDraggedTaskId(null);
      return;
    }

    const updatedTasks = cards.filter((task) => task.id !== taskId);

    const updatedTask = { ...task, status: column };

    if (draggedPosition === "column") {
      // Si estamos sobre la columna, simplemente agregamos la tarea al final
      updatedTasks.push(updatedTask);
    } else if (draggedPosition === "before" || draggedPosition === "after") {
      // Si estamos sobre una tarea, la insertamos antes o después de la tarea correspondiente
      const targetIndex = updatedTasks.findIndex(
        (task) => task.id === draggedTaskId
      );
      if (targetIndex !== -1) {
        if (draggedPosition === "before") {
          updatedTasks.splice(targetIndex, 0, updatedTask);
        } else {
          updatedTasks.splice(targetIndex + 1, 0, updatedTask);
        }
      }
    }

    updateCards(updatedTasks);
    setDraggedPosition(null);
    setDraggedTaskId(null);
  };

  const handleDragOver = (e: React.DragEvent): void => {
    e.preventDefault(); // Permitir el drop

    const target = e.target as HTMLElement;

    // Si el objetivo es el mismo que el anterior, no hacer nada
    if (lastTargetRef.current === target) return;

    // Actualizamos el objetivo almacenado
    lastTargetRef.current = target;

    // Verificar si estamos sobre una tarea o una columna
    if (target.classList.contains(styles.task)) {
      // Si estamos sobre una tarea, calculamos si el mouse está encima o debajo de ella
      const rect = target.getBoundingClientRect();
      const offsetY = e.clientY - rect.top;
      const position = offsetY < rect.height / 2 ? "before" : "after";
      setDraggedPosition(position);
      setDraggedTaskId(parseInt(target.dataset.id || "", 10)); // Almacenamos el ID de la tarea
    } else if (target.classList.contains(styles.column)) {
      // Si estamos sobre una columna, solo guardamos la posición "columna"
      const taskList = target.querySelectorAll(`.${styles.task}`);
      if (taskList.length > 0) {
        const lastTask = taskList[taskList.length - 1] as HTMLElement;
        setDraggedPosition("column");
        setDraggedTaskId(parseInt(lastTask.dataset.id || "", 10)); // Almacenamos el ID de la última tarea
      }
    }
  };

  const initialNewCard = {
    cardName: "",
    description: "",
    createdBy: "",
    assignedTo: "",
    status: "todo",
  };

  const [newCard, setNewCard] = useState<NewCard | null>(null);

  const handleAddCard = (status: "todo" | "in-progress" | "done") => {
    setNewCard({ ...initialNewCard, status });
  };

  const handleSaveNewCard =  () => {
    if (!newCard) return;
    try {
      console.log(newCard);
      createCard(newCard);
      setNewCard(null); // Limpiar el estado después de guardar
    } catch (error) {
      console.error("Error saving the card:", error);
    }
  };

  return (
    <div className={styles.kanbanBoard}>
      {columns.map((column) => (
        <div
          key={column}
          className={styles.column}
          onDrop={(e) => handleDrop(e, column)}
          onDragOver={handleDragOver}
        >
          <h2>{column.charAt(0).toUpperCase() + column.slice(1)}</h2>
          <div className={styles.taskList}>
            {cards
              .filter((task) => task.status === column)
              .map((task) => (
                <div
                  key={task.id}
                  className={`
                ${
                  draggedTaskId === task.id && draggedPosition === "before"
                    ? styles.taskBefore
                    : ""
                }
                ${
                  draggedTaskId === task.id && draggedPosition === "after"
                    ? styles.taskAfter
                    : ""
                }`}
                >
                  <div
                    data-id={task.id}
                    className={`${styles.task}`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                  >
                    <div>
                      <h3 className={styles.title}>{task.cardName}</h3>
                      <p className={styles.description}>{task.description}</p>
                    </div>
                    <div className={styles.icons}>
                      <span>
                        <CiEdit />
                      </span>
                      <span onClick={() => deleteCard(task.id)}>
                        <AiOutlineDelete />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {newCard && newCard.status === column ? (
            <>
              <div className={styles.newCard}>
                <input
                  className={styles.title}
                  placeholder="Card name"
                  value={newCard.cardName}
                  onChange={(e) =>
                    setNewCard({ ...newCard, cardName: e.target.value })
                  }
                />
                <input
                  className={styles.description}
                  placeholder="Description"
                  value={newCard.description}
                  onChange={(e) =>
                    setNewCard({ ...newCard, description: e.target.value })
                  }
                />
              </div>
              <div className={styles.newCardButtons}>
                <button onClick={handleSaveNewCard} className={styles.saveBtn}>
                  Save
                </button>
                <button
                  onClick={() => setNewCard(null)}
                  className={styles.cancelBtn}
                >
                  <ImCancelCircle />
                </button>
              </div>
            </>
          ) : (
            <div
              className={styles.addCard}
              onClick={() => handleAddCard(column)}
            >
              <span>+</span>
              <h3>Add one card</h3>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Kanban;
