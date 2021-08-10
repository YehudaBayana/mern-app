import React from 'react';
import { createContext, useReducer } from 'react';

export const StoreContext = createContext();

const initialState = {
  users: {
    user: null,
    email: '',
    pass: null,
  },
  students: {
    firstName: '',
    lastName: '',
    email: '',
    class: '',
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        users: {
          ...state.users,
          user: action.payload,
        },
      };
    case 'SET_USER_PASS':
      return {
        ...state,
        users: {
          ...state.users,
          pass: action.payload,
        },
      };
    case 'SET_USER_EMAIL':
      return {
        ...state,
        users: {
          ...state.users,
          email: action.payload,
        },
      };
    case 'SET_STUDENT_FIRST_NAME':
      return {
        ...state,
        students: {
          ...state.students,
          firstName: action.payload,
        },
      };
    case 'SET_STUDENT_LAST_NAME':
      return {
        ...state,
        students: {
          ...state.students,
          lastName: action.payload,
        },
      };
    case 'SET_STUDENT_EMAIL':
      return {
        ...state,
        students: {
          ...state.students,
          email: action.payload,
        },
      };
    case 'SET_STUDENT_CLASS':
      return {
        ...state,
        students: {
          ...state.students,
          class: action.payload,
        },
      };

    default:
      break;
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default ContextProvider;
