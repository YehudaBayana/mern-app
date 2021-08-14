import React from 'react';

const Courses = () => {
  return (
    <section className='statis mt-4 text-center'>
      <div className='row'>
        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
          <div className='box bg-primary p-3'>
            <i className='uil-eye' />
            <h3>3</h3>
            <p className='lead'>פיתוח תוכנה</p>
          </div>
        </div>
        <div className='col-md-6 col-lg-3 mb-4 mb-lg-0'>
          <div className='box bg-danger p-3'>
            <i className='uil-user' />
            <h3>1</h3>
            <p className='lead'>בדיקת תוכנה</p>
          </div>
        </div>
        <div className='col-md-6 col-lg-3 mb-4 mb-md-0'>
          <div className='box bg-secondary p-3'>
            <i className='uil-shopping-cart' />
            <h3>2</h3>
            <p className='lead'>אבטחת מידע</p>
          </div>
        </div>
        <div className='col-md-6 col-lg-3'>
          <div className='box bg-success p-3'>
            <i className='uil-feedback' />
            <h3>0</h3>
            <p className='lead'>ניתוח מידע</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
