
import { Route, Routes } from 'react-router-dom';
import './App.css'

import Login from './Compounds/Login'
import Signup from './Compounds/Signup'
import Todo from './Compounds/Todo';



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Todo />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Routes>
      {/* <Login /> */}

    </div>
  );
}

export default App;
