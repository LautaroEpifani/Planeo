import { LoginData, User } from "../types/types";
import { CustomError } from "../utils/customError"; // Importa el CustomError

// Verificar la sesión del usuario
export const checkSession = async (): Promise<{
  message: string;
  user: User;
}> => {
  try {
    const response = await fetch("https://planeo-test-deploy-backend.onrender.com/verifySession", {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new CustomError(
        "Sesión no válida o expirada",
        "SESSION_EXPIRED",
        401
      );
    }
    const data = await response.json(); 
    return data;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    console.error("Error al verificar sesión:", error);
    throw new CustomError(
      "Error desconocido al verificar sesión",
      "UNKNOWN_ERROR",
      500
    ); 
  }
};

// Login del usuario
export const loginService = async (data: LoginData) => {
  try {
    const response = await fetch("https://planeo-test-deploy-backend.onrender.com/users/login", {
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
    throw new CustomError(
      "Error desconocido en el login",
      "UNKNOWN_ERROR",
      500
    ); 
  }
};

// Logout del usuario
export const logoutService = async (): Promise<void> => {
  try {
    const response = await fetch("https://planeo-test-deploy-backend.onrender.com/users/logout", {
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
    throw new CustomError(
      "Error desconocido al cerrar sesión",
      "UNKNOWN_ERROR",
      500
    ); // Error genérico
  }
};



