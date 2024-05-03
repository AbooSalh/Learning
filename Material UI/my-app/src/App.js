import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
export default function App() {
  return (
    <div style={{
      display:"flex",
      flexDirection:"column"
    }}>
      <TopBar/>
      <div>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
