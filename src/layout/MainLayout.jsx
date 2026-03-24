import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <Outlet /> {/* ❗ THIS IS REQUIRED */}
    </div>
  );
}