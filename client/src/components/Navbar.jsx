import { useContext } from "react";
import MiniProfile from "./Mini-Profile";
import UsernameForm from "./username-form";
import { Loading } from "../App";

export default function Navbar() {
  const getCredentialId = localStorage.getItem("id");
  const [loading] = useContext(Loading);

  // if(getCredential) {
  //   console.log("getCredential: ", getCredential);
  // }

  return (
    <div className="w-[30%] max-sm:w-full h-full max-sm:h-[50px] border-r-[1px] border-gray-400">
      {loading && (
          <div className="max-sm:hidden relative z-[10] w-full h-full flex justify-center items-center bg-slate-200">
            <span className="loading loading-spinner loading-lg text-info"></span>
          </div>
        )}
      <div className="max-sm:hidden flex flex-col h-[70%] gap-12">
        <div className="flex justify-center p-3 text-2xl tracking-wider">
          <label>To Do in Wisata</label>
        </div>
        <div className="flex justify-center items-center p-3">

        {getCredentialId ? <MiniProfile /> : <UsernameForm />}
        </div>
      </div>
    </div>
  );
}
