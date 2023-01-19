import React, { useContext, useState } from "react";
const UserContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (username) => {
    setUser(username);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const useCustomAuth = () => {
  return useContext(UserContext);
};
