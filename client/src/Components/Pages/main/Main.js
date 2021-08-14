import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../customHooks/ContextProvider';
import Courses from '../../Features/courses/Courses';
import SideBar from '../../Features/sideBar/SideBar';
import Table from '../../Features/table/Table';
import UserOptions from '../../Features/userOptions/UserOptions';
import './main.css';

const Main = ({ user }) => {
  const { state, dispatch } = useContext(StoreContext);

  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch('https://mern-jk.herokuapp.com/api/students')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  function handleLogOut() {
    dispatch({ type: 'CLEAR_USER' });
    localStorage.clear();
  }
  return (
    <>
      <div>
        <SideBar user={user} />
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
                <img
                  alt=''
                  src='https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg'
                />
                <div onClick={handleLogOut} className='logout'>
                  LOGOUT
                </div>
              </a>
            </div>
          </nav>
          <div className='p-4'>
            <div className='welcome'>
              <div className='content rounded-3 p-3'>
                <h1 className='fs-3'>צהריים טובים {user.fullName}</h1>
                <p className='mb-0'>
                  Hello Jone Doe, welcome to your awesome dashboard!
                </p>
              </div>
            </div>
            {user.role === 'admin' ? <Courses /> : <UserOptions />}
            {user.role === 'regular' && (
              <section className='admins mt-4'>
                <div className='row'>
                  {/* <h4>Admins:</h4> */}
                  {students?.map((student, i) => {
                    return (
                      <>
                        <div key={student._id || i} className='col-md-6'>
                          <div className='box'>
                            <div className='admin d-flex align-items-center rounded-2 p-3 mb-4'>
                              <div className='img'>
                                <img
                                  className='img-fluid rounded-pill'
                                  width={75}
                                  height={75}
                                  src='https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png'
                                  alt='admin'
                                />
                              </div>
                              <div className='ms-3'>
                                <h3 className='fs-5 mb-1'>
                                  {student.firstName} {student.lastName}
                                </h3>
                                <p className='mb-0'>
                                  Lorem ipsum dolor sit amet consectetur elit.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </section>
      </div>
      <Table />
    </>
  );
};

export default Main;
