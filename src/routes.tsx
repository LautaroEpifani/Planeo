import { RouteObject } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Board from "./pages/Board/Board";
// import PrivateRoute from "./components/PrivateRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "board",
        element: (
          // <PrivateRoute>
            <Board />
          // </PrivateRoute>
        ),
      },
    ],
  },
];

export default routes;
