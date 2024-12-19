import { useState, useEffect, ReactNode } from "react";
import CardsContext from "./CardsContext";
import { Card } from "../../types/types"; // Ajusta la ruta según donde esté tu tipo Card
import {
  getCardsService,
  createCardService,
  updateCardService,
  deleteCardService,
} from "../../services/cardsService"; // Ajusta la ruta según tus servicios

const CardsProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<Card[]>([]);

  // Obtener todas las tarjetas al montar el componente
  useEffect(() => {
    getAllCards();
  }, []);

  // Obtener todas las tarjetas
  const getAllCards = async () => {
    const data = await getCardsService(); // Llamada a tu servicio para obtener las tarjetas
    setCards(data);
  };

  // Crear una nueva tarjeta
  const createCard = async (
    newCard: Omit<Card, "id" | "createdAt" | "updatedAt">
  ) => {
    console.log(newCard);
    const data = await createCardService(newCard); // Llamada a tu servicio para crear la tarjeta
    return data;
  };

  // Actualizar una tarjeta por ID
  const updateCard = async (
    id: number,
    updatedCard: Partial<Omit<Card, "id" | "createdAt" | "updatedAt">>
  ) => {
    const data = await updateCardService(id, updatedCard); // Llamada a tu servicio para actualizar la tarjeta
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, ...data } : card))
    );
  };

  // Eliminar una tarjeta por ID
  const deleteCard = async (id: number) => {
    await deleteCardService(id); // Llamada a tu servicio para eliminar la tarjeta
    setCards((prevCards) => prevCards.filter((card) => card.id !== id)); // Eliminar la tarjeta del estado
  };

  return (
    <CardsContext.Provider
      value={{ cards, getAllCards, createCard, updateCard, deleteCard }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
