import React, { useEffect, useState } from 'react';

const SrudentList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch('https://mern-jk.herokuapp.com/api/students')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <section className='admins mt-4'>
      <div className='row'>
        {/* <h4>Admins:</h4> */}
        {isLoading ? (
          <img
            src='https://www.essver.co.il/wp-content/plugins/ajaxify-wordpress-site-pro/images/configPageLoader.gif'
            alt=''
            width='100%'
          />
        ) : (
          students?.map((student, i) => {
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
          })
        )}
      </div>
    </section>
  );
};

export default SrudentList;
