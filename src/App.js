import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from './components/jsx/header';
import Presentation from './components/jsx/presentation';
import Intro from './components/jsx/introduction';
import SkillsComponent from './components/jsx/skills'
import ProjetsComponents from './components/jsx/works'
import Contact from './components/jsx/contact'
import FormContact from './components/jsx/fromContact';
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
        <div id="overlay">
          <Header />
          <Presentation />
        </div>
      </div>

      <div id='colorSkills'>
        <Intro />
        <h1 id='competences'>Compétences</h1>
        <SkillsComponent />
      </div>

      <div id='worksPage'>
        <h1 id="titreProjets">Projets</h1>
        <ProjetsComponents />
        <a href='#overlay'>
          <i class="fa fa-chevron-up"></i>
        </a>
      </div>

      <div id='Contact'>
        <h1 id="contactTitle">Contactez moi</h1>
        <div id='contact2'>
          <Contact />
          <FormContact />
        </div>
        <a href='#overlay'>
          <i class="fa fa-chevron-up"></i>
        </a>
      </div>

    </div>
  );
}


export default AppRouter;
