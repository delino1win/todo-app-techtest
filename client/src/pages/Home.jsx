// import AddTodoModal from "../components/AddTodo-Modal";
import CategoryFilter from "../components/Category-Filter";
import HeaderPage from "../components/HeaderPage";
import List from "../components/List";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[16%] flex items-center px-5 border-b-[1px] border-gray-400 max-sm:hidden">
        <HeaderPage />
      </div>
      <div className="flex-1 w-full">
        <CategoryFilter />
        <List />
      </div>
      {/* <div className="flex-1 flex justify-center items-center bg-transparent">
        <AddTodoModal />
      </div> */}
    </div>
  );
}
