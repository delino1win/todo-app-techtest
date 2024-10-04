import { Link } from "react-router-dom";
import Logout from "./Logout";
import { FaCircleUser } from "react-icons/fa6";
import { AiOutlineFileDone } from "react-icons/ai";

export default function MbAuthenticated() {
  return (
    <div className="flex flex-row items-center justify-end gap-1 w-[50%] h-full px-2">
      <label className="tracking-widest text-nowrap truncate">
        Hi, <b>{localStorage.getItem("id")}</b>
      </label>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <FaCircleUser className="size-10" />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          {/* <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li> */}
          <li>
            <Link
              to="/history"
              className="w-full flex flex-row justify-evenly p-3"
            >
              <label>History</label>
              <AiOutlineFileDone className="size-5" />
            </Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
}
