import { LoginData } from "../types/types";
import { CustomError } from "../utils/customError"; // Importa el CustomError

// Verificar la sesión del usuario
export const checkSession = async (): Promise<boolean> => {
  try {
    const response = await fetch("http://localhost:3000/users/verify-session", {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new CustomError("Sesión no válida o expirada", "SESSION_EXPIRED", 401);
    }
    return response.ok;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error; // Re-lanzamos el CustomError si es el tipo esperado
    }
    console.error("Error al verificar sesión:", error);
    throw new CustomError("Error desconocido al verificar sesión", "UNKNOWN_ERROR", 500);  // Error genérico
  }
};

// Login del usuario
export const loginService = async (data: LoginData): Promise<void> => {
  try {
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new CustomError("Login fallido", "LOGIN_FAILED", 401);
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error; // Lanzamos el CustomError para que se maneje correctamente
    }
    console.error("Error en login:", error);
    throw new CustomError("Error desconocido en el login", "UNKNOWN_ERROR", 500);  // Error genérico
  }
};

// Logout del usuario
export const logoutService = async (): Promise<void> => {
  try {
    const response = await fetch("http://localhost:3000/users/logout", {
      method: "POST",
      credentials: "include",
    });
    if (!response.ok) {
      throw new CustomError("Error al cerrar sesión", "LOGOUT_FAILED", 400);
    }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error; // Lanzamos el CustomError para que se maneje correctamente
    }
    console.error("Error en logout:", error);
    throw new CustomError("Error desconocido al cerrar sesión", "UNKNOWN_ERROR", 500);  // Error genérico
  }
};
