import { createContext } from "react";
import { Card } from "../../types/types";
interface CardsContextType {
  cards: Card[]; // Lista de tarjetas
  getAllCards: () => void; // Función para obtener todas las tarjetas
  createCard: (newCard: Omit<Card, 'id' | 'createdAt' | 'updatedAt'>) => Promise<Card>; // Función para crear una nueva tarjeta
  updateCard: (id: number, updatedCard: Partial<Omit<Card, 'id' | 'createdAt' | 'updatedAt'>>) => void; // Función para actualizar una tarjeta
  deleteCard: (id: number) => void; // Función para eliminar una tarjeta
}

const CardsContext = createContext<CardsContextType | null>(null);

export default CardsContext