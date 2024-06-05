import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import Decalogo from '../../audios/decalogosanagustin.mp3';
import './Jumbotron.css';

function Jumbotron() {

  return (
    <div>
       <div className="p-3 ">
      <div className="container-fluid py-5">
        <h2 className="display-3 text-center text-lg-start">Decálago de San Águstin</h2>
        <h3 className='text-secondary text-center text-lg-start'>Cómo orar con Dios en la oración</h3>
        <p className="col-md-8 fs-5 text-justify">"Señor, he aquí este pobre y miserable corazón que, por tu bondad, ha concebido muchos y muy buenos deseos. Pero, ¡ay!, es demasiado débil e infeliz para realizar el bien que desea, si no le otorgas tu celestial bendición, la cual, con este fin, yo te pido, ¡oh Padre de bondad!, por los méritos de la pasión de tu Hijo, a cuyo honor consagro este día y el resto de mi vida“</p>
        <div className="row justify-content-center align-items-center 
        justify-content-lg-start align-items-lg-start h-100 ">
        <div className=''>
        <AudioPlayer  src={Decalogo} className=" rounded-5 col-lg-6 col-sm-4"/>
        </div>
      </div>
      </div>
      </div>
 
    </div>
  )
}

export default Jumbotron