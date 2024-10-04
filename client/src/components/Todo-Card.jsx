import { FaRegEdit } from "react-icons/fa";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa6";


export default function TodoCard({ prop }) {
  return (
    <div className="flex flex-row w-full h-[70px] gap-1">
      <div className="flex flex-row justify-evenly items-center w-[20%] max-sm:w-[20%]">
        <button className="max-sm:hidden">
          <MdOutlinePlaylistRemove fill="#383838" size={32} />
        </button>
        <button className="">
          <FaRegEdit fill="#383838" className="size-[32px] max-sm:size-[24px]" />
        </button>
        <input type="checkbox" className="checkbox checkbox-lg max-sm:checkbox-md" />
      </div>
      <div className="flex flex-col justify-center w-[70%]">
        <div className="max-w-xl max-sm:max-w-[260px] overflow-hidden">
          <p className="truncate whitespace-nowrap text-lg tracking-wider font-semibold text-gray-600">todo description  todo description </p>
        </div>
        <div><p className="font-light italic">date</p></div>
      </div>
      <div className="flex-1 flex justify-evenly items-center">
        <FaDumbbell className="size-[40px]" />
      </div>
    </div>
  );
}
