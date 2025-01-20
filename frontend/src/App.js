import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './components/Todo/Todo.jsx';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;