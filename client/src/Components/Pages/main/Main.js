import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../customHooks/ContextProvider';
import Courses from '../../Features/courses/Courses';
import StudentList from '../../Features/studentList/SrudentList';
import Table from '../../Features/table/Table';
import UserOptions from '../../Features/userOptions/UserOptions';
import './main.css';

const Main = ({ user }) => {
  const { state, dispatch } = useContext(StoreContext);

  function handleLogOut() {
    dispatch({ type: 'CLEAR_USER' });
    localStorage.clear();
  }
  return (
    <>
      <div>
        <section id='wrapper'>
          <nav className='navbar navbar-expand-md'>
            <div className='container-fluid mx-2'>
              <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                  <span className='main-color'>טק </span>
                  קריירה
                </a>
              </div>
            </div>

            <div className='navigation'>
              <a className='button' href=''>
                <div onClick={handleLogOut} className='logout'>
                  LOGOUT
                </div>
              </a>
            </div>
          </nav>
          <h1>האתר הזה עדיין לא גמור אין מה להתרשם פה</h1>
          <div className='p-4'>
            <div className='welcome'>
              <div className='content rounded-3 p-3'>
                <h1 className='fs-3'>צהריים טובים {user.fullName}</h1>
                <p className='mb-0'>
                  Hello {user.fullName}, welcome to your awesome dashboard!
                </p>
              </div>
            </div>
            {user.role === 'admin' ? <Courses /> : <UserOptions />}
            {user.role === 'regular' && <StudentList />}
          </div>
        </section>
      </div>
      <Table />
    </>
  );
};

export default Main;
