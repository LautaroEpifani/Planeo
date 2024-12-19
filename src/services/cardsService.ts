import { Card } from "../types/types";


// Obtener todas las tarjetas
export const getCardsService = async (): Promise<Card[]> => {
  const response = await fetch("https://planeo-test-deploy-backend.onrender.com/cards");
  if (!response.ok) {
    throw new Error("Error fetching cards");
  }
  return await response.json();
};

// Crear una nueva tarjeta
export const createCardService = async (newCard: Omit<Card, 'id' | 'createdAt' | 'updatedAt'>): Promise<Card> => {
  const response = await fetch("https://planeo-test-deploy-backend.onrender.com/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCard),
  });

  if (!response.ok) {
    throw new Error("Error creating card");
  }
  const data = await response.json();
  console.log(data)
  return data;
};

// Actualizar una tarjeta
export const updateCardService = async (id: number, updatedCard: Partial<Omit<Card, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Card> => {
  const response = await fetch(`https://planeo-test-deploy-backend.onrender.com/cards/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCard),
  });

  if (!response.ok) {
    throw new Error("Error updating card");
  }
  return await response.json();
};

// Eliminar una tarjeta
export const deleteCardService = async (id: number): Promise<void> => {
  const response = await fetch(`https://planeo-test-deploy-backend.onrender.com/cards/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error deleting card");
  }
};
