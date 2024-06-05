import React from 'react';
import Jumbotron from '../jumbotron/Jumbotron';
import Misericordia from '../misericordia/Misericordia';
import Misa from '../misa/Misa';
import Oracion from '../oracion/Oracion';
import Proteccion from '../proteccion/Proteccion';
import Providencia from '../providencia/Providencia';
import Marianas from '../marianas/Marianas';
import {CelebracionMes} from '../CelebracionMes/CelebracionMes';

import {Oraciones} from '../oraciones/Oraciones';
import {OracionesDia} from '../oraciones-dia/OracionesDia';

let d = new Date().getDate();


const Home = () => {

  return (
    <div>
     { d === 1 ? ( <Providencia/> ) : ''}
    <OracionesDia />
    <Marianas/>
    <CelebracionMes/>
    <Jumbotron/>
    <Misericordia/>
    <Misa/>
    <Proteccion/>
    <Oracion/>
   
    <Oraciones/>
    </div>
  );
}

export default Home