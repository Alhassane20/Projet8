import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from './components/jsx/header';
import Presentation from './components/jsx/presentation';
import Intro from './components/jsx/introduction';
import SkillsComponent from './components/jsx/skills'
import ProjetsComponents from './components/jsx/works'
import './App.css'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Accueil />} />
      </Routes>
    </Router>
  );
}

function Accueil() {
  return (
    <div>

      <div className="backgroundImage">
        <div className="overlay">
          <Header />
          <Presentation />
        </div>
      </div>

      <div id='colorSkills'>
        <Intro />
        <h1 id='competences'>Compétences</h1>
        <SkillsComponent />
        <i class="fa fa-light fa-circle-arrow-down arrow-light2"></i>
      </div>

      <div id='worksPage'>
      <h1 id="titreProjets">Projets</h1>
        <ProjetsComponents />
      </div>

    </div>
  );
}


export default AppRouter;
