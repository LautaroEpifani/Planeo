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


export type Card = {
  id: number;
  cardName: string;
  description: string;
  createdBy: string;
  assignedTo: string;
  status: 'todo' | 'in-progress' | 'done';
  createdAt: string;
  updatedAt: string;
}