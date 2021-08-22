import './App.css';
import { useContext } from 'react';
import Login from './Components/Pages/login/Login';
import { StoreContext } from './Components/customHooks/ContextProvider';
import { Route, Switch } from 'react-router-dom';
import Main from './Components/Pages/main/Main';
import AddStudent from './Components/Features/form/addStudent/AddStudent';
import Chat from './Components/Pages/chat/Chat';
import SideBar from './Components/Features/sideBar/SideBar';
import Profile from './Components/Pages/profile/Profile';

function App() {
  const { state } = useContext(StoreContext);
  return (
    <>
      {!state?.user ? (
        <>
          <Login />
        </>
      ) : (
        <div className='App'>
          <SideBar user={state.user} />

          <Switch>
            <Route exact path='/'>
              <Main user={state.user} />
              <AddStudent />
            </Route>
            <Route path='/chat'>
              <Chat />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
