import Swal from "sweetalert2";
import AddTaskForm from "./AddTask-Form";

export default function AddTodoModal() {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
      <button
        className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-200 text-lg tracking-wider btn-wide hover:shadow-lg hover:shadow-gray-300 transition-all duration-300"
        onClick={() => {
          if (!localStorage.getItem("id")) {
            return Swal.fire({
              icon: "error",
              title: "Unidentified User",
              text: "Insert Your Username first!",
              showCloseButton: true,
            });
          }
          document.getElementById("my_modal_3").showModal();
        }}
      >
        New Task
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-5">
            Hi, What is your plan for today?
          </h3>
          <AddTaskForm />
        </div>
      </dialog>
    </div>
  );
}
