import React, { useEffect, useRef, useState } from "react";
import styles from "./Kanban.module.css";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { useCards } from "../../../hooks/useCards";
import { ImCancelCircle } from "react-icons/im";
import { Card, NewCardType } from "../../../types/types";

interface Props {
  projectId: number | undefined;
}

const Kanban = ({ projectId }: Props) => {
  const { cards, createCard, deleteCard, updateCard, getAllCards } = useCards();

  const [cardsContainer, setCardsContainer] = useState<Card[]>([]);

  useEffect(() => {
    const cardsByProject = cards.filter(
      (cards) => cards.projectId === projectId
    );
    setCardsContainer(cardsByProject); // Sincroniza cuando cambian las tarjetas del contexto
  }, [cards, projectId]);

  const columns: ("todo" | "in-progress" | "done")[] = [
    "todo",
    "in-progress",
    "done",
  ];

  // ID de la tarjeta que tomamos como referencia en dragOver es decir la tarjeta adyacente a la del destino.
  const [draggedTaskId, setDraggedTaskId] = useState<number | null>(null);
  const [draggedPosition, setDraggedPosition] = useState<
    "before" | "after" | "column" | null
  >(null);

  const lastTargetRef = useRef<HTMLElement | null>(null);

  // DRAG START; DRAG DROP; DRAG OVER;  -----------------------------------------------------------------------------------

  const handleDragStart = (e: React.DragEvent, taskId: number): void => {
    const taskIdString = taskId.toString();
    e.dataTransfer.setData("taskId", taskIdString);
  };

  const handleDrop = async (
    e: React.DragEvent,
    column: "todo" | "in-progress" | "done"
  ): Promise<void> => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData("taskId"), 10);

    const task = cardsContainer.find((task) => task.id === taskId);
    if (!task) return;
    console.log(draggedPosition);
    console.log(draggedTaskId);

    // Si la tarea está en la misma columna, no hacemos nada
    if (task.status === column && taskId === draggedTaskId) {
      setDraggedPosition(null);
      setDraggedTaskId(null);
      return;
    }

    const updatedTasks = cardsContainer.filter((task) => task.id !== taskId);
    const tasksInColumn = updatedTasks.filter((task) => task.status === column);
    const updatedTask = { ...task, status: column };

    if (draggedPosition === "column") {
      // Si estamos sobre la columna, simplemente agregamos la tarea al finald
      const newOrder =
        tasksInColumn.length > 0
          ? Math.max(...tasksInColumn.map((task) => task.order)) + 100
          : 0;
      updatedTask.order = newOrder;
      await updateCard(updatedTask.id, updatedTask);
    } else if (draggedPosition === "before" || draggedPosition === "after") {
      const targetIndex = updatedTasks.findIndex(
        (task) => task.id === draggedTaskId
      );

      if (targetIndex !== -1) {
        // Filtramos las tareas de la columna
        const tasksInColumn = updatedTasks
          .filter((task) => task.status === column)
          .sort((a, b) => a.order - b.order);

        console.log("Tareas en la columna:", tasksInColumn);

        // Encontramos el índice de la tarea sobre la cual se va a soltar (no la tarea arrastrada)
        const targetTaskIndex = tasksInColumn.findIndex(
          (task) => task.id === draggedTaskId
        );
        console.log("Índice de la tarea objetivo:", targetTaskIndex);

        let newOrder;

        if (draggedPosition === "before") {
          console.log(
            "Tareas en la columna:",
            tasksInColumn[targetTaskIndex - 1]
          );
          const previousTask = tasksInColumn[targetTaskIndex - 1];
          const currentTask = tasksInColumn[targetTaskIndex];

          updatedTasks.splice(targetIndex, 0, updatedTask);

          const currentOrder = parseFloat(currentTask?.order.toString());
          const previousOrder = parseFloat(previousTask?.order.toString());

          console.log(
            "Tarea Anterior:",
            previousTask,
            "Orden  Anterior",
            previousOrder
          );
          console.log(
            "Tarea actual:",
            currentTask,
            "Orden Actual",
            currentOrder
          );

          // Si hay una tarea anterior, calculamos el orden
          if (previousTask && currentTask) {
            newOrder = (previousOrder + currentOrder) / 2;
            console.log("Nuevo orden calculado:", newOrder);
          } else if (previousTask) {
            newOrder = previousOrder - 200; // Si no hay tarea siguiente, lo colocamos al principio
            console.log("Nuevo orden calculado:", newOrder);
          } else if (currentTask) {
            newOrder = currentOrder - 200; // Si no hay tarea anterior, lo colocamos antes de la primera
            console.log("Nuevo orden calculado:", newOrder);
          } else {
            newOrder = 100; // Si no hay tareas, es la primera tarea
          }
        } else {
          // Cuando es after
          const nextTask = tasksInColumn[targetTaskIndex + 1];
          const currentTask = tasksInColumn[targetTaskIndex];

          updatedTasks.splice(targetIndex + 1, 0, updatedTask);
          const currentOrder = parseFloat(currentTask?.order.toString());
          const nextOrder = parseFloat(nextTask?.order.toString());
          console.log(
            "Tarea actual:",
            currentTask,
            "Orden Actual",
            currentOrder
          );
          console.log(
            "Tarea siguiente:",
            nextTask,
            "Orden Siguiente",
            nextOrder
          );
          if (currentTask && nextTask) {
            newOrder = (currentOrder + nextOrder) / 2;
            console.log("Nuevo orden calculado:", newOrder);
          } else if (currentTask) {
            newOrder = currentOrder + 200; // Si no hay tarea siguiente, la añadimos después de la actual
            console.log("Nuevo orden calculado:", newOrder);
          } else if (nextTask) {
            newOrder = nextOrder + 200; // Si no hay tarea anterior, la añadimos después de la siguiente
            console.log("Nuevo orden calculado:", newOrder);
          } else {
            newOrder = 100; // Si no hay tareas, es la primera tarea en la columna
          }
        }

        // newOrder = parseFloat((newOrder * 100).toFixed(2));

        console.log("Nuevo orden calculado:", newOrder);

        updatedTask.order = newOrder;

        // Actualizamos las tareas localmente
        // updatedTasks.splice(targetIndex + (draggedPosition === "before" ? 0 : 1), 0, updatedTask);

        // Actualizamos la base de datos
        await updateCard(updatedTask.id, updatedTask);
      }
    }

    setCardsContainer([...updatedTasks]);
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
      // const taskList = target.querySelectorAll(`.${styles.task}`);
      // if (taskList.length >= 0) {
      // const lastTask = taskList[taskList.length - 1] as HTMLElement;
      setDraggedPosition("column");
      //   setDraggedTaskId(parseInt(lastTask.dataset.id || "", 10)); // Almacenamos el ID de la última tarea
      // }
    } else {
      setDraggedPosition("column");
    }
  };

  // ADD NEW CARD --------------------------------------------------------------------------------------------------------
  const initialNewCard = {
    cardName: "",
    description: "",
    createdBy: "",
    assignedTo: "",
    status: "todo",
    order: 100,
  };

  const [newCard, setNewCard] = useState<NewCardType | null>(null);

  const handleAddCard = (status: "todo" | "in-progress" | "done") => {
    const existingCards = cardsContainer.filter(
      (card) => card.status === status
    ); // Filtramos las tarjetas en esa columna
    const newOrder =
      existingCards.length > 0
        ? Math.max(...existingCards.map((card) => card.order)) + 200 // Incrementamos en 200 respecto al máximo actual
        : 100; // Si no hay tarjetas, comenzamos en 100
    setNewCard({ ...initialNewCard, status, order: newOrder });
  };

  const handleSaveNewCard = async () => {
    if (!newCard) return;
    try {
      const createdCard = await createCard({ ...newCard, projectId });
      setCardsContainer((prevCards) => [...prevCards, createdCard]);
      setNewCard(null); // Limpiar el estado después de guardar
      await getAllCards();
    } catch (error) {
      console.error("Error saving the card:", error);
    }
  };

  // UPDATE CARD -------------------------------------------------------------------------------------------------------------

  const [editCardForm, setEditCardForm] = useState<Card | null>(null);

  const handleEditCardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditCardForm((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleEditCard = (card: Card) => {
    setEditCardForm(card);
  };

  const handleUpdateCard = async (card: Card | null) => {
    if (card) {
      const fieldsToUpdate = (({
        cardName,
        description,
        assignedTo,
        createdBy,
        status,
        order,
      }) => ({
        cardName,
        description,
        assignedTo,
        createdBy,
        status,
        order,
      }))(card);
      await updateCard(card.id, fieldsToUpdate);
      setEditCardForm(null);
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
          <div>
            {cardsContainer
              .filter((card) => card.status === column)
              .sort((a, b) => a.order - b.order)
              .map((task) => (
                <div key={task.id} className={styles.borderContainer}>
                  <div
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
                  ></div>
                  {editCardForm &&
                  editCardForm.status === column &&
                  editCardForm.id === task.id ? (
                    <>
                      <div className={styles.newCard}>
                        <input
                          className={styles.title}
                          name="cardName"
                          placeholder="Edit card name"
                          value={editCardForm.cardName}
                          onChange={(e) => handleEditCardInput(e)}
                        />
                        <input
                          className={styles.description}
                          name="description"
                          placeholder="Edit description"
                          value={editCardForm.description}
                          onChange={(e) => handleEditCardInput(e)}
                        />
                      </div>
                      <div className={styles.newCardButtons}>
                        <button
                          onClick={() => handleUpdateCard(editCardForm)}
                          className={styles.saveBtn}
                        >
                          Update
                        </button>
                        <button
                          onClick={() => setEditCardForm(null)}
                          className={styles.cancelBtn}
                        >
                          <ImCancelCircle />
                        </button>
                      </div>
                    </>
                  ) : (
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
                        <span
                          className={styles.icon}
                          onClick={() => handleEditCard(task)}
                        >
                          <CiEdit />
                        </span>
                        <span
                          className={styles.icon}
                          onClick={() => deleteCard(task.id)}
                        >
                          <AiOutlineDelete />
                        </span>
                      </div>
                    </div>
                  )}
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
