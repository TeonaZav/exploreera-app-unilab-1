import React, { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

const initialState = { user: null, isAuthenticated: false };

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

const FAKE_USER = {
  userName: "Teona",
  userEmail: "te@gmail.com",
  userPassword: "123123",
  userImage:
    "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png",
};

export const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.userEmail && password === FAKE_USER.userPassword) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
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
