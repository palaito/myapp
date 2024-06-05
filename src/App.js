import Header from './componentes/header/Header.jsx';
import Footer from './componentes/footer/Footer.jsx';
import Rosario from './componentes/santoRosario/SantoRosario';
import Radio from './componentes/radio/Radio.js';
import Jgh from './componentes/jgh/Jgh';
import Sidebar from './componentes/navbar/Sidebar.js';
import { Evangelio } from './componentes/evangelio/Evangelio';

import ScrollToTop from "react-scroll-to-top";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componentes/home/Home.js';
import Aviso from './componentes/aviso/Aviso.js';
import {Liturgia} from './componentes/liturgia/Liturgia';
import {Biografias} from './componentes/biografias/Biografias';

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="#000" />
      <Sidebar/>
      <Header/>
      <Aviso/>
    <Routes>
    <Route path='/' element={ <Home/> }></Route>
    <Route path='jgh' element={ <Jgh/> }></Route>
    <Route path='emisoras' element={ <Radio/> }></Route>
     <Route path='rosario' element={ <Rosario/> }></Route>
      <Route path='evangelio' element={ <Evangelio/> }></Route>
      <Route path='liturgia' element={ <Liturgia/> }></Route>
       <Route path='biografias' element={ <Biografias/> }></Route>
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
