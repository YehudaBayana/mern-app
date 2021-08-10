import './App.css';
import { useContext } from 'react';
import TopStudents from './Components/Features/students/TopStudents';
import Login from './Components/Pages/login/Login';
import { StoreContext } from './Components/customHooks/ContextProvider';
import Main from './Components/Pages/main/Main';
import AddStudent from './Components/Features/form/addStudent/AddStudent';

function App() {
  const { state, dispatch } = useContext(StoreContext);

  // const postStudent = (e) => {
  //   e.preventDefault();
  //   fetch('https://mern-jk.herokuapp.com/api/students', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       firstName: 'asi',
  //       lastName: 'alena',
  //       email: state.email,
  //       description: 'jnfkdsskdf fdsj  dfj sdf sd a sdkjs ad askd',
  //       class: 'full-stack mem period',
  //       grades: [
  //         {
  //           test: 'react',
  //           grade: 80,
  //         },
  //       ],
  //     }),
  //   })
  //     .then((res) => {
  //       console.log(res.body);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      {!state.users?.user ? (
        <>
          <Login />
        </>
      ) : (
        <div className='App'>
          <Main user={state.users.user} />
          <TopStudents />

          {/* <form
            onSubmit={postStudent}
            style={{ width: '500px', margin: '0 auto' }}
          >
            <input
              onChange={(e) =>
                dispatch({ type: 'SET_EMAIL', payload: e.target.value })
              }
              type='email'
              placeholder='enter email'
            />
            <button>send</button>
          </form> */}
          <AddStudent />
        </div>
      )}
    </>
  );
}

export default App;
