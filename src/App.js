import { Routes, Route, BrowserRouter } from 'react-router-dom';
import  MainApp from './components/Pages/MainApp';
import  LevelPage from './components/Pages/LevelPage';
import TaskApp from './components/Pages/TaskApp';
import React from 'react';
import './style.css'


export default function App(){
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/level" element={<LevelPage />} />
          <Route path="/task" element={<TaskApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}