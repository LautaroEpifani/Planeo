import { createContext } from "react";
import { Card } from "../../types/types";
interface CardsContextType {
  cards: Card[]; // Lista de tarjetas
  getAllCards: () => void; // Función para obtener todas las tarjetas
  createCard: (newCard: Omit<Card, 'id' | 'createdAt' | 'updatedAt'>) => void; // Función para crear una nueva tarjeta
  updateCard: (id: number, updatedCard: Partial<Omit<Card, 'id' | 'createdAt' | 'updatedAt'>>) => void; // Función para actualizar una tarjeta
  deleteCard: (id: number) => void; // Función para eliminar una tarjeta
  updateCards: (cards: Card[]) => void; // Función para actualizar la lista de tarjetas
}

const CardsContext = createContext<CardsContextType | null>(null);

export default CardsContext