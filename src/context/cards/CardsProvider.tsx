import { useState, useEffect, ReactNode } from "react";
import CardsContext from "./CardsContext";
import { Card } from "../../types/types"; // Ajusta la ruta según donde esté tu tipo Card
import { getCardsService, createCardService, updateCardService, deleteCardService } from "../../services/cardsService"; // Ajusta la ruta según tus servicios

const CardsProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<Card[]>([]);

  // Obtener todas las tarjetas al montar el componente
  useEffect(() => {
    getAllCards();
  }, [cards]);

  const updateCards = (updatedCards: Card[]) => {
    setCards(updatedCards);
  };

  // Obtener todas las tarjetas
  const getAllCards = async () => {
    try {
      const data = await getCardsService(); // Llamada a tu servicio para obtener las tarjetas
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  // Crear una nueva tarjeta
  const createCard = async (newCard: Omit<Card, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const data = await createCardService(newCard); // Llamada a tu servicio para crear la tarjeta
      setCards((prevCards) => [...prevCards, data]); // Actualizar la lista de tarjetas
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };

  // Actualizar una tarjeta por ID
  const updateCard = async (id: number, updatedCard: Partial<Omit<Card, 'id' | 'createdAt'>>) => {
    try {
      const data = await updateCardService(id, updatedCard); // Llamada a tu servicio para actualizar la tarjeta
      setCards((prevCards) => 
        prevCards.map((card) => (card.id === id ? { ...card, ...data } : card))
      ); // Actualizar la tarjeta en el estado
    } catch (error) {
      console.error("Error updating card:", error);
    }
  };

  // Eliminar una tarjeta por ID
  const deleteCard = async (id: number) => {
    try {
      await deleteCardService(id); // Llamada a tu servicio para eliminar la tarjeta
      setCards((prevCards) => prevCards.filter((card) => card.id !== id)); // Eliminar la tarjeta del estado
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  return (
    <CardsContext.Provider value={{ cards, getAllCards, createCard, updateCard, deleteCard, updateCards }}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
