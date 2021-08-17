import React from 'react';
import { createContext, useReducer } from 'react';

export const StoreContext = createContext();

const initialState = {
  forRender: 1,
  user: null,
  fullName: '',
  email: '',
  pass: null,
  student: {
    firstName: '',
    lastName: '',
    email: '',
    class: '',
  },
  rooms: [
    { id: 0, name: 'lobby' },
    { id: 1, name: 'javascript' },
  ],
  activeRoomId: 0,
  messages: [{ id: 1, from: 'yuda', text: 'first message' }],
};

function reducer(state, action) {
  switch (action.type) {
    case 'FOR_RENDER':
      return {
        ...state,
        forRender:
          state.forRender === 1 ? (state.forRender = 0) : (state.forRender = 0),
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'CLEAR_USER':
      return {
        ...state,
        user: null,
      };

    case 'SET_USER_FULL_NAME':
      return {
        ...state,
        fullName: action.payload,
      };
    case 'SET_USER_PASS':
      return {
        ...state,
        pass: action.payload,
      };
    case 'SET_USER_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_STUDENT_FIRST_NAME':
      return {
        ...state,
        student: {
          ...state.student,
          firstName: action.payload,
        },
      };
    case 'SET_STUDENT_LAST_NAME':
      return {
        ...state,
        student: {
          ...state.student,
          lastName: action.payload,
        },
      };
    case 'SET_STUDENT_EMAIL':
      return {
        ...state,
        student: {
          ...state.student,
          email: action.payload,
        },
      };
    case 'SET_STUDENT_CLASS':
      return {
        ...state,
        student: {
          ...state.student,
          class: action.payload,
        },
      };
    case 'ADD_MESSAGES':
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
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
