import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './table.css';
import { StoreContext } from '../../customHooks/ContextProvider';

const Table = () => {
  const { state } = useContext(StoreContext);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://mern-jk.herokuapp.com/api/students')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setIsLoading(false);
      });
  }, [state.forRender]);

  const columns = [
    // { field: 'id', headerName: 'ID', width: 110 },
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
      width: 160,
      editable: true,
    },
    {
      field: 'test',
      headerName: 'test',
      width: 160,
      valueGetter: (params) => {
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
    {
      field: 'class',
      headerName: 'class',
      width: 160,
      editable: true,
    },
  ];

  const newArrayOfObj = students.map(({ _id: id, ...rest }) => ({
    id,
    ...rest,
  }));

  return (
    <>
      {isLoading ? (
        <img
          src='https://www.essver.co.il/wp-content/plugins/ajaxify-wordpress-site-pro/images/configPageLoader.gif'
          alt=''
          width='100%'
        />
      ) : (
        newArrayOfObj && (
          <div>
            {/* style={{ marginRight: '250px' }} */}
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
              <button>do some</button>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Table;
