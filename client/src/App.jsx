import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { getListTodo } from "./fetch";

export const TodoList = React.createContext();
export const SelectedItems = React.createContext();
export const Loading = React.createContext();

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  console.log("todolist: ", todoList);

  useEffect(() => {
    async function fetchData() {
      const listTodo = await getListTodo();
      setTodoList(listTodo);
    }

    if (localStorage.getItem("id")) {
      fetchData();
    }
  }, []);

  return (
    <div className="w-full h-screen bg-sky-200 flex justify-center items-center">
      <div className="max-w-5xl h-[70%] max-sm:h-full w-full flex flex-row max-sm:flex-col bg-slate-100 rounded-lg">
        <TodoList.Provider value={[todoList]}>
          <SelectedItems.Provider value={[selectedItems, setSelectedItems]}>
            <Loading.Provider value={[loading, setLoading]}>
              <Navbar />
              <div className="w-full h-full">
                <Outlet />
              </div>
            </Loading.Provider>
          </SelectedItems.Provider>
        </TodoList.Provider>
      </div>
    </div>
  );
}

export default App;
