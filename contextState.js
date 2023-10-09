import React, { useContext } from "react";

export const initialState = {
  userToken: "",
  user: {},
};

export const ActionTypes = {
  setUserToken: "SET_USER_TOKEN",
  setUser: "SET_USER",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setUserToken: {
      return { ...state, userToken: action.newValue };
    }
    case ActionTypes.setUser: {
      return { ...state, user: action.newValue };
    }
    default: {
      return state;
    }
  }
};

export const initialContext = {
  contextState: initialState,
  setContextState: () => {},
};

const Context = React.createContext(initialContext);

export function ContextProvider({ children, state = initialState }) {
  const [contextState, setContextState] = React.useReducer(
    reducer,
    state
  );

  return (
    <Context.Provider value={{ contextState, setContextState }}>
      {children}{" "}
    </Context.Provider>
  );
}

export const useContextState = () => useContext(Context);