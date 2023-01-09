import { useState } from "react";
import { createContext, useContext } from "react";

export const UserContext = createContext();
export const CustomContext = () => {
  return useContext(UserContext);
};
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const logout = () => {
    setUser(null);
  };
  const login = (username) => {
    setUser(username);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
