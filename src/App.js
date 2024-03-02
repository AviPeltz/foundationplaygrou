import { Routes, Route, BrowserRouter } from 'react-router-dom';
import  MainApp from './components/Pages/MainApp';
import  LevelPage from './components/Pages/LevelPage';
import TaskApp from './components/Pages/TaskApp';
import CanvasApp from './components/Pages/CanvasApp';
import ProjectsPage from './components/Pages/ProjectsPage';
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
          <Route path="/canvas" element={<CanvasApp />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/project/new_project"/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}