import { useContext } from "react";
import { SelectedItems, TodoList } from "../App";
import AddTodoModal from "./AddTodo-Modal";
import { IoTrashBinOutline } from "react-icons/io5";
import TodoCard from "./Todo-Card";

export default function List() {
  const [todoList] = useContext(TodoList);
  const [selectedItems, setSelectedItems] = useContext(SelectedItems);

  // console.log(todoList);

  let getTodoUser = []

  if(todoList.length > 0 && localStorage.getItem("id")) {
    getTodoUser = todoList.filter(item => item.userId === localStorage.getItem("id") && item.isDone === false)
  }

  // console.log(getTodoUser);
  // console.log(todoList);

  return (
    <div className="relative flex w-full h-[440px] overflow-y-auto">
      {getTodoUser.length < 1 && (
        <div className="flex w-full h-full justify-center items-center">
          <div className="flex flex-col items-center">
            <IoTrashBinOutline size={50} />
            <label className="text-xl italic">No Data</label>
          </div>
        </div>
      )}
      <div className="flex-1 flex flex-col gap-5 w-full h-full overflow-y-auto">
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      </div>
      <AddTodoModal />
    </div>
  );
}
