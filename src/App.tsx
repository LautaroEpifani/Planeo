import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import AuthProvider from "./context/auth/AuthProvider";
import CardsProvider from "./context/cards/CardsProvider";

function App() {
  const router = createBrowserRouter(routes, {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  });

  return (
    <AuthProvider>
      <CardsProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </CardsProvider>
    </AuthProvider>
  );
}

export default App;
