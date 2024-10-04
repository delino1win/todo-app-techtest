/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Loading } from "../App";
import { submitUsername } from "../fetch";
import Swal from "sweetalert2";
import { Toast } from "../utils";
import { useNavigate } from "react-router-dom";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useContext(Loading);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username) {
      return await Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Username can`t be empty",
      });
    }

    if (username.length < 3) {
      return await Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Username can`t less than 3 characters",
      });
    }

    try {
      setLoading(true);
      const getData = await submitUsername(username);

      if (getData) {
        localStorage.setItem("id", getData.id);
      }
    } catch (error) {
      console.log("user not found therefore create a new one and login");
    } finally {
      setLoading(false);
      await Toast.fire({
        icon: "success",
        title: "Success Indentified",
      });

      navigate(0);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[70%] flex flex-col items-center gap-5"
    >
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="grow"
          placeholder="Username"
        />
      </label>
      <button
        type="submit"
        className="btn btn-glass bg-gradient-to-r from-cyan-200 to-blue-200 w-full hover:shadow-lg hover:shadow-gray-400 tracking-wider text-gray-600"
      >
        Submit
      </button>
    </form>
  );
}
