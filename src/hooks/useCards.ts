import { useContext } from "react";
import CardsContext from "../context/cards/CardsContext";

export const useCards = () => {
  const context = useContext(CardsContext);
  if (context === null) {
    throw new Error("useAuth must be used within an CardProvider");
  }
  return context;
};


