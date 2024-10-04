import { useEffect, useState } from "react";
import Logout from "./Logout";
import { FaCircleUser } from "react-icons/fa6";
import { apiUrl} from "../fetch";
import UserMiniDashboard from "./User-MiniDashboard";


export default function MiniProfile() {

  const getCredentialId = localStorage.getItem("id");
  const [todo, setTodo] = useState([])

  useEffect(() => {

    async function fetchData() {
      
      const url = apiUrl + `/todo?userId=${getCredentialId}`
      const res = await fetch(url)
      const getTodo = await res.json()
      setTodo(getTodo)
    }

    if(getCredentialId) {
      fetchData()
      
    }
  }, [])

  return (
    <div className="flex w-full h-full flex-col items-center gap-3">
      <FaCircleUser className="size-24" />
      <p className="tracking-widest text-center">Welcome, <b>{getCredentialId}</b></p>
      <UserMiniDashboard prop={todo}/>
      <div className="flex w-full h-full justify-center items-end"> 
        
      <Logout />
      </div>
    </div>
  )
}
