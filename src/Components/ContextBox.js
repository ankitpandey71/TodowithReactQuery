import React, { createContext, useEffect, useState } from "react";
import { getToDB } from "./PouchDb";

export const ContextBoxData = createContext();

// eslint-disable-next-line react/prop-types
export const ContextBox = ({ children }) => {
  const [list, setList] = useState([]);

  const getTheData = async () => {
    // gettodbfun
    const data = await getToDB();
    console.log("datacoming", data);
    setList(data?.rows);
  };
  console.log("box data coming", list);
  const value = React.useMemo(() => ({ getTheData, list }), [list]);

  useEffect(() => {
    getTheData();
  }, []);

  console.log("DATA ItemLISTED", value);
  return (
    <ContextBoxData.Provider value={value}>{children}</ContextBoxData.Provider>
  );
};
