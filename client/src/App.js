import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:8080/students')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className='App'>
      <h1>home page</h1>
    </div>
  );
}

export default App;
