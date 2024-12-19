export class CustomError extends Error {
    code?: string;  // Puedes añadir un código de error para categorizar el error
    statusCode?: number;  // Un código de estado HTTP si lo deseas
  
    constructor(message: string, code?: string, statusCode?: number) {
      super(message);  // Llamamos al constructor de Error
      this.name = "CustomError";  // Le damos un nombre al error
      this.code = code;
      this.statusCode = statusCode;
      Object.setPrototypeOf(this, new.target.prototype);  // Correcta herencia de Error
    }
}