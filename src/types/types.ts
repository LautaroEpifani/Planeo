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
