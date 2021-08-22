import React, { useState } from "react";

let userContext = React.createContext();

export default userContext;

//provide data to children

export const UserProvider = ({ children }) => {
  const [userList, setuserList] = useState([
    {
      name: "Aubrey Marks edited-2",
      position: "Dynamic Accounts Liaison",
      salary: "530000",
      email: "Wilma_Toy@yahoo.com",
      startdate: "16-01-1999",
      age: "22",
      office: "kia",
      id: "6",
    },
    {
      name: "Alton Labadie PhD",
      position: "Dynamic Accountability Strategist",
      salary: "864.19",
      email: "Zackary_Bogan60@gmail.com",
      startdate: "16-01-1999",
      age: "22",
      office: "kia",
      id: "7",
    },
    {
      name: "Miss James Emmerich",
      position: "Customer Response Orchestrator",
      salary: "274.02",
      email: "Ethel78@gmail.com",
      startdate: "16-01-1999",
      age: "22",
      office: "kia",
      id: "9",
    },
    {
      name: "Miss Sheri Ernser",
      position: "International Group Coordinator",
      salary: "908.70",
      email: "Nathanael0@yahoo.com",
      startdate: "16-01-1999",
      age: "22",
      office: "kia",
      id: "10",
    },
    {
      name: "KUMAR",
      position: "ENGINEER",
      salary: "2000",
      email: "kumar@gmail",
      startdate: "16-01-1999",
      age: "22",
      office: "kia",
      id: "11",
    },
  ]);
  return (
    <userContext.Provider value={{ userList, setuserList }}>
      {children}
    </userContext.Provider>
  );
};
