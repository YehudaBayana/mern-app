import React, { useContext } from 'react';
import { StoreContext } from '../../../customHooks/ContextProvider';
import './addStudent.css';

export let forRender = 1;
const AddStudent = () => {
  const { state, dispatch } = useContext(StoreContext);

  const postStudent = (e) => {
    e.preventDefault();
    return fetch('https://mern-jk.herokuapp.com/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: state.student.firstName,
        lastName: state.student.lastName,
        email: state.student.email,
        class: state.student.class,
        grades: [
          {
            test: 'no tests',
            grade: 1,
          },
        ],
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({ type: 'FOR_RENDER' });
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className='form__container'>
        <form onSubmit={postStudent} id='contact'>
          <h3>add student to the list</h3>
          <h4>refresh the page for see changes</h4>
          <fieldset>
            <input
              placeholder='student first name'
              type='text'
              tabindex='1'
              required
              autofocus
              onChange={(e) =>
                dispatch({
                  type: 'SET_STUDENT_FIRST_NAME',
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(e) =>
                dispatch({
                  type: 'SET_STUDENT_LAST_NAME',
                  payload: e.target.value,
                })
              }
              placeholder='student last name'
              type='text'
              tabindex='2'
              required
            />
          </fieldset>
          <fieldset>
            <input
              onChange={(e) =>
                dispatch({ type: 'SET_STUDENT_EMAIL', payload: e.target.value })
              }
              placeholder='student email'
              type='email'
              tabindex='3'
              required
            />
          </fieldset>
          <fieldset>
            <select
              onChange={(e) =>
                dispatch({
                  type: 'SET_STUDENT_CLASS',
                  payload: e.target.value,
                })
              }
              name='courses'
            >
              <option disabled selected value>
                בחר תפקיד
              </option>
              <option value='full-stack development'>פיתוח תוכנה</option>
              <option value='QA'>בדיקת תוכנה</option>
              <option value='data Security'>אבטחת מידע</option>
              <option value='data-analysis'>ניתוח מידע</option>
            </select>
          </fieldset>
          <fieldset>
            <button
              name='submit'
              type='submit'
              id='contact-submit'
              data-submit='...Sending'
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
