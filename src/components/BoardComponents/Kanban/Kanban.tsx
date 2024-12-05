import React, { useState } from "react";
import styles from "./Kanban.module.css";
import { motion } from "framer-motion";

interface Task {
  id: number;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  order: number;
}

const Kanban: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Tarea 1",
      description: "Descripción de tarea",
      status: "todo",
      order: 0,
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Descripción de tarea",
      status: "in-progress",
      order: 0,
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "Descripción de tarea",
      status: "done",
      order: 0,
    },
  ]);

  const columns: ("todo" | "in-progress" | "done")[] = [
    "todo",
    "in-progress",
    "done",
  ];

  const handleDragStart = (e: React.DragEvent, taskId: number): void => {
    e.dataTransfer.setData("taskId", taskId.toString());
  };

  const handleDrop = (
    e: React.DragEvent,
    column: "todo" | "in-progress" | "done"
  ): void => {
    const taskId = parseInt(e.dataTransfer.getData("taskId"));

    // Crear una copia inmutable de las tareas

    const newTasks = [...tasks]; // Copia del array original
    console.log(newTasks);
    const taskIndex = newTasks.findIndex((task) => task.id === taskId);
    console.log(taskIndex);
    if (taskIndex === -1) return;

    const task = newTasks[taskIndex];

    // Cambiar solo el estado y el orden de la tarea arrastrada
    const updatedTask = {
      ...task,
      status: column,
      order: newTasks.filter((t) => t.status === column).length, // Asignar un orden adecuado según la columna
    };

    // Actualizar la tarea dentro del nuevo array
    newTasks[taskIndex] = updatedTask;

    setTasks(newTasks);
  };

  const handleDragOver = (e: React.DragEvent): void => {
    e.preventDefault();
  };

  return (
    <div className={styles.kanbanBoard}>
      {columns.map((column) => (
        <div
          key={column}
          className={styles.column}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, column)}
        >
          <h2>{column.charAt(0).toUpperCase() + column.slice(1)}</h2>
          <div className={styles.taskList}>
            {tasks
              .filter((task) => task.status === column)
              .sort((a, b) => a.order - b.order) // Ordenar las tareas por el campo 'order'
              .map((task) => (
                <motion.div
                  key={task.id}
                  className={styles.task}
                  draggable
                  layout
                  layoutId={task.title}
                  onDragStart={(e) => handleDragStart(e, task.id)}
                >
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kanban;
