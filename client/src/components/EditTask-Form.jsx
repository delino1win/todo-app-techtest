/* eslint-disable react/prop-types */
import { useState } from "react"
import { Toast } from "../utils"
import { apiUrl } from "../fetch"
import Swal from "sweetalert2"
import {useNavigate} from 'react-router-dom'

export default function EditTaskForm({prop}) {

  const [inputTask, setInputTask] = useState(prop.desc)
  const [category, setCategory] = useState(prop.category)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const submitHandler = async (event) => {
    event.preventDefault()

    // let newTask = {
    //   id: generateNanoid(),
    //   userId: localStorage.getItem("id"),
    //   desc: inputTask,
    //   category: category,
    //   isDone: false,
    //   createdAt: new Date().toISOString()
    // }

    if(!inputTask || !category) {
      return Toast.fire({
        title: "Desc is Empty",
        icon: "error"
      })
    }

    try {

      setLoading(true)
      
      await fetch(apiUrl + `/todo/${prop?.id}`, {
        method: 'put',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...prop,
          desc: inputTask,
          category: category
        })
      })
      await Toast.fire({
        title: "Description Updated",
        icon: "success"
      })

    } catch (error) {
      console.error(error)
      await Swal.fire({
        title: `${error.message}`,
        icon: "error"
      })
    } finally {
      setLoading(false)

      if(!loading) {
        // window.location.reload()
        navigate(0)
      }
    }
  }

  const categoryHandler = (event) => {
    const value = event.target.value
    setCategory(value)
    // console.log("selectHandler:", value) 
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-5">
      <textarea
        value={inputTask}
        onChange={e => setInputTask(e.target.value)}
        placeholder="Change your mind eh? . . ."
        className="textarea textarea-bordered textarea-lg w-full"
      ></textarea>
      <select value={category} onChange={categoryHandler} className="select w-full hover:shadow-md shadow-gray-600 transition-all duration-500">
        <option disabled selected>
          Pick the category of your task
        </option>
        <option value="work">Work</option>
        <option value="shopping">Shopping</option>
        <option value="exercise">Exercise</option>
        <option value="other">Other</option>
      </select>
      <button type="submit" className="btn btn-glass bg-blue-100 w-full hover:bg-sky-400 text-lg tracking-wider" disabled={`${loading ? 'disabled': ''}`}>
        {loading ? (<span className="loading loading-spinner loading-md"></span>) : "Submit"}
      </button>
    </form>
  );
}
