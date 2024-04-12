import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = { user: null, isAuthenticated: false, image: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
};

export const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated, image }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(user) {
    dispatch({ type: "login", payload: user });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
};
