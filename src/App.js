import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './components/About';
import NotMatch from './components/NotMatch';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/notmatch" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
