import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const MainLayout: React.FC = () => {
  return (
      <main style={{ height: "100vh" }}>
        <NavBar/>
        <Outlet />
      </main>
  );
};

export default MainLayout;
