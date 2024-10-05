import { useContext, useEffect, useState } from "react";
import { SelectedItems } from "../App";
import { IoTrashBinOutline } from "react-icons/io5";
import { apiUrl, getListTodo } from "../fetch";
import { MdHistory } from "react-icons/md";
import HistoryCard from "./History-Card";
import Multideletion from "./MultiDeletion";

import SkeletonLoading from "./Skeleton-Loading";
import { FilterContext } from "../provider/ProviderFilter";

export default function ListHistory() {
  const [listHistory, setListHistory] = useState([]);
  const [selectedItems, setSelectedItems] = useContext(SelectedItems);
  const [loading, setLoading] = useState(false);

  const { filterState, setFilterState } = useContext(FilterContext);

  // console.log(todoList);

  useEffect(() => {
    async function fetchData() {
      //ini default query
      let endpointUrl =
        apiUrl + `/todo?isDone=true&userId=${localStorage.getItem("id")}`;
      if (filterState.sortValue) {
        endpointUrl += `&_sort=${filterState.sortValue}`;
      }

      if (filterState.categoryValue) {
        endpointUrl += `&category=${filterState.categoryValue}`;
      }

      // Fetch the todo list based on the query
      const listTodo = await getListTodo(endpointUrl, setLoading);
      setListHistory(listTodo);
    }

    if (localStorage.getItem("id")) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    setSelectedItems([]);

    const resetFilter = {
      sortValue: "-createdAt",
      categoryValue: "",
    };
    setFilterState((curr) => ({
      ...curr,
      ...resetFilter,
    }));
  }, []);

  function handleSelection(isChecked, task) {
    if (isChecked) {
      setSelectedItems([...selectedItems, task]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item.id !== task.id));
    }
  }

  return (
    <div className="relative flex w-full h-[380px] max-sm:h-[520px] overflow-y-auto py-3">
      {loading ? (
        <div className="flex w-full h-full p-12">
          <SkeletonLoading />
        </div>
      ) : (
        <>
          {listHistory.length < 1 ? (
            <div className="flex w-full h-full justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center gap-3">
                  <IoTrashBinOutline size={50} />
                  <MdHistory size={50} />
                </div>
                <label className="text-xl italic">No History Data</label>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col gap-7 w-full min-h-full overflow-y-auto">
              {listHistory.map((item) => (
                <HistoryCard
                  key={item.id}
                  prop={item}
                  handleSelection={handleSelection}
                />
              ))}
            </div>
          )}
        </>
      )}
      <div className="flex flex-row items-center gap-5 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        {selectedItems.length > 0 && <Multideletion />}
      </div>
    </div>
  );
}
