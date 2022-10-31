import { createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext();

// Reducer constants
export const IS_AUTH_READY = 'isAuthReady';
export const LOGIN = 'login';

const authReducer = (state, action) => {
  switch (action.type) {
    case IS_AUTH_READY:
      return {
        user: action.payload,
        isAuthReady: true,
      };
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false,
  });

  useEffect(() => {
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     dispatch({ type: IS_AUTH_READY, payload: user });
    //   } else {
    //     dispatch({ type: IS_AUTH_READY, payload: null });
    //   }
    // });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
