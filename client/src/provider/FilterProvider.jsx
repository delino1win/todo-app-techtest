/* eslint-disable react/prop-types */
import { createContext, useState} from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filterState, setFilterState] = useState({
    sortValue: "-createdAt",
    categoryValue: "",
  });

  const updateFilterState = (newState) => {
    setFilterState((curr) => ({ ...curr, ...newState }));
  };

  return (
    <FilterContext.Provider value={{ filterState, setFilterState, updateFilterState }}>
      {children}
    </FilterContext.Provider>
  );
}
