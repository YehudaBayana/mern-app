import React, { useState, useEffect } from 'react';
import './sideBar.css';

const SideBar = ({ user }) => {
  return (
    <>
      <aside
        className='sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left'
        id='show-side-navigation1'
      >
        <i
          className='uil-bars close-aside d-md-none d-lg-none'
          data-close='show-side-navigation1'
        />
        <div className='sidebar-header d-flex justify-content-between align-items-center px-3 py-4'>
          <i className='fas fa-user-circle'></i>
          {/* <img
              className='rounded-pill img-fluid'
              style={{ marginLeft: '10px' }}
              width={65}
              src='https://www.timeshighereducation.com/sites/default/files/byline_photos/anonymous-user-gravatar_0.png'
              alt=''
            /> */}
          <div className='ms-2'>
            <h5 className='fs-6 mb-0'>
              <a className='text-decoration-none' href='#'>
                {user.fullName}
              </a>
            </h5>
            <p className='mt-1 mb-0'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className='search position-relative text-center px-4 py-3 mt-2'>
          <input
            type='text'
            className='form-control w-100 border-0 bg-transparent'
            placeholder='Search here'
          />
          <i className='fa fa-search position-absolute d-block fs-6' />
        </div>
        <ul className='categories list-unstyled'>
          <li>
            <i className='uil-estate fa-fw' />
            <a href='#'> Dashboard</a>
          </li>
          <li className>
            <i className='uil-folder' />
            <a href='#'> File manager</a>
          </li>
          <li>
            <i className='uil-calendar-alt' />
            <a href='#'> Calender</a>
          </li>
          <li>
            <i className='uil-envelope-download fa-fw' />
            <a href='#'> Mailbox</a>
          </li>
          <li>
            <i className='uil-shopping-cart-alt' />
            <a href='#'> Ecommerce</a>
          </li>
          <li>
            <i className='uil-bag' />
            <a href='#'> Projects</a>
          </li>
          <li>
            <i className='uil-setting' />
            <a href='#'> Settings</a>
          </li>
          <li>
            <i className='uil-chart-pie-alt' />
            <a href='#'> Components</a>
          </li>
          <li>
            <i className='uil-panel-add' />
            <a href='#'> Charts</a>
          </li>
          <li>
            <i className='uil-map-marker' />
            <a href='#'> Maps</a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
