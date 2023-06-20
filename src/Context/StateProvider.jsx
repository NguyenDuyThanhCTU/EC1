import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isUploadProduct, setIsUploadProduct] = useState(0);
  const [isSelected, setSelected] = useState(0);
  const [SortBySize, setSortBySize] = useState(" ");
  const [SortByType, setSortByType] = useState(" ");
  const [isSelectedRole, setSelectedRole] = useState(0);

  return (
    <StateContext.Provider
      value={{
        isSelectedRole,
        setSelectedRole,
        isSelected,
        setSelected,
        isUploadProduct,
        setIsUploadProduct,
        SortBySize,
        setSortBySize,
        SortByType,
        setSortByType,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
