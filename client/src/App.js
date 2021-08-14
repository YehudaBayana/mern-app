import './App.css';
import { useContext } from 'react';
import Login from './Components/Pages/login/Login';
import { StoreContext } from './Components/customHooks/ContextProvider';
import Main from './Components/Pages/main/Main';
import AddStudent from './Components/Features/form/addStudent/AddStudent';

function App() {
  const { state } = useContext(StoreContext);
  return (
    <>
      {!state.users?.user ? (
        <>
          <Login />
        </>
      ) : (
        <div className='App'>
          <Main user={state.users.user} />
          <AddStudent />
        </div>
      )}
    </>
  );
}

export default App;
