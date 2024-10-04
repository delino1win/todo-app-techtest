import { useContext, useEffect, useState } from "react";
import { SelectedItems } from "../App";
import AddTodoModal from "./AddTodo-Modal";
import { IoTrashBinOutline } from "react-icons/io5";
import TodoCard from "./Todo-Card";
import { apiUrl, getListTodo } from "../fetch";
import Multiselection from "./Multiselection";

export default function List() {
  const [todoList, setTodoList] = useState([]);
  const [selectedItems, setSelectedItems] = useContext(SelectedItems);

  // console.log(todoList);

  useEffect(() => {
    async function fetchData() {
      //ini default query
      let endpointUrl =
        apiUrl +
        `/todo?isDone=false&_sort=-createdAt&userId=${localStorage.getItem(
          "id"
        )}`;
      const listTodo = await getListTodo(endpointUrl);
      setTodoList(listTodo);
    }

    if (localStorage.getItem("id")) {
      fetchData();
    }
  }, []);

  // if (todoList.length > 0 && localStorage.getItem("id")) {
  //   getTodoUser = todoList.filter(
  //     (item) =>
  //       item.userId === localStorage.getItem("id") && item.isDone === false
  //   );
  // }

  // console.log(getTodoUser);
  // console.log(todoList);

  function handleSelection(isChecked, task) {
    if (isChecked) {
      setSelectedItems([...selectedItems, task]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item.id !== task.id));
    }
  }

  return (
    <div className="relative flex w-full h-[440px] overflow-y-auto py-3">
      {todoList.length < 1 && (
        <div className="flex w-full h-full justify-center items-center">
          <div className="flex flex-col items-center">
            <IoTrashBinOutline size={50} />
            <label className="text-xl italic">No Data</label>
          </div>
        </div>
      )}
      <div className="flex-1 flex flex-col gap-7 w-full h-full overflow-y-auto ">
        {todoList.map((item) => (
          <TodoCard
            key={item.id}
            prop={item}
            handleSelection={handleSelection}
          />
        ))}
      </div>
      <div className="flex flex-row items-center gap-5 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <AddTodoModal />
        {selectedItems.length > 0 && (
          <Multiselection />
        )}
      </div>
    </div>
  );
}
