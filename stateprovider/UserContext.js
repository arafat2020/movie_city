import React, { createContext, useState } from "react";

export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [lode, setLoad] = useState(true);
  const [reasult, setReasult] = useState();
  const [imdb, setImdb] = useState();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [current, setCurrent] = useState("All");
  console.log(imdb);

  return (
    <UserContext.Provider
      value={{
        lode,
        setLoad,
        reasult,
        setReasult,
        imdb,
        setImdb,
        page,
        setPage,
        total,
        setTotal,
        current,
        setCurrent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
