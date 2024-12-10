export type LoginData = {
  email: string;
  password: string;
};

export type InputName = "email" | "password";

export type InputsRegister = {
  name: InputName;
  placeholder: string;
  type: string;
};

export type CardStatus = "todo" | "in-progress" | "done";

export type Card = {
  id: number;
  cardName: string;
  description: string;
  createdBy: string;
  assignedTo: string;
  status: CardStatus;
  createdAt: string;
  updatedAt: string;
};

export type NewCard = Omit<Card, "id" | "createdAt" | "updatedAt">;
