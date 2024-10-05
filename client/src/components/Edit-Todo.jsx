/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import EditTaskForm from "./EditTask-Form";


export default function EditTodo({prop}) {

  return (
    <div className="">
      <button
        className=""
        onClick={() => {
          if (!localStorage.getItem("id")) {
            return Swal.fire({
              icon: "error",
              title: "Unidentified User",
              text: "Insert Your Username first!",
              showCloseButton: true,
            });
          }
          document.getElementById(`my_modal_${prop.id}`).showModal();
        }}
      >
        <FaRegEdit
            fill="#383838"
            className="size-[32px] max-sm:size-[24px]"
          />
      </button>
      <dialog id={`my_modal_${prop.id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-5">
            Hi, want to update your plan?
          </h3>
          <EditTaskForm prop={prop} />
        </div>
      </dialog>
    </div>
  )
}
