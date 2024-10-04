// import AddTodoModal from "../components/AddTodo-Modal";
import List from "../components/List";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <div className="w-full h-[16%] bg-fuchsia-100">
        test
      </div>
      <div className="flex-1 w-full">
        <List />
      </div>
      {/* <div className="flex-1 flex justify-center items-center bg-transparent">
        <AddTodoModal />
      </div> */}
    </div>
  );
}
