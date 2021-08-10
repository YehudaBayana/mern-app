import React from 'react';

const UserOptions = () => {
  return (
    <>
      <section className='statistics mt-4'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3'>
              <i className='uil-envelope-shield fs-2 text-center bg-primary rounded-circle' />
              <div className='ms-3'>
                <div className='d-flex align-items-center'>
                  <h3 className='mb-0'>עדכן על תקלות</h3>
                  <span className='d-block ms-2'></span>
                </div>
                <p className='fs-normal mb-0'>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3'>
              <i className='uil-file fs-2 text-center bg-danger rounded-circle' />
              <div className='ms-3'>
                <div className='d-flex align-items-center'>
                  <h3 className='mb-0'>ציונים</h3>
                  <span className='d-block ms-2'></span>
                </div>
                <p className='fs-normal mb-0'>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='box d-flex rounded-2 align-items-center p-3'>
              <i className='uil-users-alt fs-2 text-center bg-success rounded-circle' />
              <div className='ms-3'>
                <div className='d-flex align-items-center'>
                  <h3 className='mb-0'>5,245</h3>
                  <span className='d-block ms-2'>Users</span>
                </div>
                <p className='fs-normal mb-0'>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserOptions;
