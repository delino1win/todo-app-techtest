import CategoryFilter from "../components/Category-Filter";
import HeaderPage from "../components/HeaderPage";
import ListHistory from "../components/ListHistory";


export default function History() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[16%] flex items-center px-5 border-b-[1px] border-gray-400 max-sm:hidden">
        <HeaderPage />
      </div>
      <div className="flex-1 w-full">
        <CategoryFilter />
        <ListHistory />
      </div>
      {/* <div className="flex-1 flex justify-center items-center bg-transparent">
        <AddTodoModal />
      </div> */}
    </div>
  )
}
