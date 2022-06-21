import './App.css';
import Alunos from './components/Alunos';
import Home from './components/Home';
import Sobre from './components/Sobre';
import React from "react";
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
      <BrowserRouter>
      <h1 className='text-center'>CRUD</h1>
      <Nav variant="tabs" className='justify-content-center'>
        <Nav.Link as={Link} to="/Home">
          Página Inicial
        </Nav.Link>
        <Nav.Link as={Link} to="/Alunos">
          Cadastro dos Alunos
        </Nav.Link>
        <Nav.Link as={Link} to="/Sobre">
          Sobre
        </Nav.Link>
      </Nav>
      <Routes>
        <Route path="/Home" exact={true} element={<Home/>}></Route>
        <Route path="/Alunos" exact={true} element={<Alunos/>}></Route>
        <Route path="/Sobre" exact={true} element={<Sobre/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
    </div>
  );
}

export default App;
