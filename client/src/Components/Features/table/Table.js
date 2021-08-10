import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './table.css';

const Table = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch('https://mern-jk.herokuapp.com/api/students')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'date_created',
      headerName: 'date',
      // type: 'number',
      width: 160,
      editable: true,
    },
    {
      field: 'test',
      headerName: 'test',
      width: 160,
      valueGetter: (params) => {
        console.log({ params });
        let result = [];
        if (params.row.grades) {
          if (params.row.grades[0].test) {
            result.push(params.row.grades[0].test);
          }
        } else {
          result = ['Unknown'];
        }
        return result.join(', ');
      },
    },
    {
      field: 'grade',
      headerName: 'grade',
      width: 160,
      valueGetter: (params) => {
        // console.log({ params });
        let result = [];
        if (params.row.grades) {
          if (params.row.grades[0].grade) {
            result.push(params.row.grades[0].grade);
          }
        } else {
          result = ['Unknown'];
        }
        return result.join(', ');
      },
    },
  ];

  //   const arrayOfObj = [{
  //     key1: 'value1',
  //     key2: 'value2'
  //   }, {
  //     key1: 'value1',
  //     key2: 'value2'
  //   }];
  // console.log('im students: ', students);
  // const newArrayOfObj = students.map(({ _id: id, ...rest }) => ({
  //   id,
  //   ...rest,
  // }));

  // console.log(newArrayOfObj);
  //   console.log(students);

  return (
    <>
      {/* {newArrayOfObj && (
        <div style={{ marginRight: '250px' }}>
          <div
            style={{
              height: 400,
              width: '90%',
              margin: '0 auto',
              direction: 'ltr',
              background: 'white',
            }}
          >
            <DataGrid
              rows={newArrayOfObj}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </div>
      )} */}

      {/* <div className='table__wrapper'>
        <table id='customers'>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          {students.map((student) => {
            return (
              <tr key={student._id}>
                <td>{student.firstName}</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            );
          })}
        </table>
      </div> */}
    </>
  );
};

export default Table;
