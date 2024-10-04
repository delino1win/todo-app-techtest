/* eslint-disable react/prop-types */
import { useState } from "react";
import { formatDate } from "../utils";
import CategoryConverter from "./CategoryConverter";
import EditTodo from "./Edit-Todo";

export default function TodoCard({ prop, handleSelection }) {
  // console.log(prop);

  const [isChecked, setIsChecked] = useState(false);

  function handleChecked(event) {
    const { checked } = event.target;

    setIsChecked(checked);

    // console.log("checked status: ", checked);

    handleSelection(checked, prop);
    // } else {
    //   console.error("error");
    // }
  }

  return (
    <div className="flex flex-row w-full h-[70px] gap-1">
      <div className="flex flex-row justify-evenly items-center w-[20%] max-sm:w-[20%]">
        <EditTodo prop={prop} />
        <input
          onChange={handleChecked}
          checked={isChecked}
          value={prop?.id}
          type="checkbox"
          className="checkbox checkbox-lg max-sm:checkbox-md"
        />
      </div>
      <div className="flex flex-col justify-center w-[70%]">
        <div className="max-w-xl max-sm:max-w-[260px] overflow-hidden">
          <p
            className={`${
              isChecked ? "line-through text-gray-400" : ""
            } truncate whitespace-nowrap text-lg tracking-wider font-semibold text-gray-600`}
          >
            {prop?.desc}
          </p>
        </div>
        <div>
          <p className="font-light text-sm italic">
            {formatDate(prop?.createdAt)}
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-evenly items-center pr-10 max-sm:pr-3">
        <CategoryConverter prop={prop?.category} />
      </div>
    </div>
  );
}
