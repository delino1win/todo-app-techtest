import { useContext } from "react";
import { FilterContext } from "../provider/FIlterProvider";

export default function CategoryFilter() {

  const { filterState, updateFilterState } = useContext(FilterContext);

  const handleSortChange = (event) => {
    updateFilterState({ sortValue: event.target.value });
  };

  const handleCategoryChange = (event) => {
    updateFilterState({ categoryValue: event.target.value });
  };

  return (
    <div className="flex w-full justify-between p-3">
      <div className="flex justify-start items-center w-[50%]">
        <select
          value={filterState.sortValue}
          onChange={handleSortChange}
          className="select transition-all duration-500 bg-transparent"
        >
          <option disabled>Sort Date</option>
          <option value="-createdAt">Descending</option>
          <option value="createdAt">Ascending</option>
        </select>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <select
          value={filterState.categoryValue}
          onChange={handleCategoryChange}
          className="select transition-all duration-500 bg-transparent"
        >
          <option value="">All Categories</option>
          <option value="work">Work</option>
          <option value="shopping">Shopping</option>
          <option value="exercise">Exercise</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
}
