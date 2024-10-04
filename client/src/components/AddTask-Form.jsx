import { useState } from "react"
import { generateNanoid, Toast } from "../utils"
import Swal from "sweetalert2"
import { apiUrl } from "../fetch"

export default function AddTaskForm() {

  const [inputTask, setInputTask] = useState("")
  const [category, setCategory] = useState("")
  const [loading, setLoading] = useState(false)

  const submitHandler = async (event) => {
    event.preventDefault()

    let newTask = {
      id: generateNanoid(),
      userId: localStorage.getItem("id"),
      desc: inputTask,
      category: category,
      isDone: false,
      createdAt: new Date().toISOString()
    }

    if(!newTask.desc || !newTask.category) {
      return Toast.fire({
        title: "Desc or Category is Empty",
        icon: "error"
      })
    }

    try {

      setLoading(true)
      
      await fetch(apiUrl + `/todo`, {
        method: 'post',
        body: JSON.stringify(newTask)
      })
      await Toast.fire({
        title: "To Do Added",
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
        window.location.reload()
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
        onChange={e => setInputTask(e.target.value)}
        placeholder="Describe Your Task . . ."
        className="textarea textarea-bordered textarea-lg w-full"
      ></textarea>
      <select onChange={categoryHandler} className="select w-full hover:shadow-md shadow-gray-600 transition-all duration-500">
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
