import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProviders = ({ children }) => {
  const [Gmail, setGmail] = useState("");
  const [Adress, setAdress] = useState("");
  const [Location, setLocation] = useState("");
  const [Logo, setLogo] = useState("");
  const [Phone, setPhone] = useState("");
  const [Websitename, setWebsitename] = useState("");

  return (
    <DataContext.Provider
      value={{
        Gmail,
        setGmail,
        Adress,
        setAdress,
        setLocation,
        setLogo,
        setPhone,
        Location,
        Logo,
        Phone,
        Websitename,
        setWebsitename,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
