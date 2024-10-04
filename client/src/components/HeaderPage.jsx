import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { PiLineVerticalBold } from "react-icons/pi";
import { AiOutlineFileDone } from "react-icons/ai";

export default function HeaderPage() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-row items-center gap-3 p-3">
      <Link to="/" className={`flex flex-row items-end gap-1 ${isActive("/") ? "font-bold text-black" : ""}`}>
        <GoHome fill={isActive("/") ? "#000" : "#45474B"} className="size-[40px]" />
        <h1 className={`text-2xl tracking-widest hover:text-gray-700 transition-all duration-500 ${isActive("/") ? "text-black" : "text-gray-500"}`}>
          Home
        </h1>
      </Link>
      <div>
        <PiLineVerticalBold fill="#45474B" className="size-[40px]" />
      </div>
      <Link to="/history" className={`flex flex-row items-end gap-1 ${isActive("/history") ? "font-bold text-black" : ""}`}>
        <AiOutlineFileDone fill={isActive("/history") ? "#000" : "#45474B"} className="size-[40px]" />
        <h1 className={`text-2xl tracking-widest hover:text-gray-700 transition-all duration-500 ${isActive("/history") ? "text-black" : "text-gray-500"}`}>
          History
        </h1>
      </Link>
    </div>
  );
}
