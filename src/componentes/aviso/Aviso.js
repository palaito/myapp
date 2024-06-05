import React from "react";
import Marquee from "react-fast-marquee";
import './Aviso.css'


const Aviso = () =>{
 
  return (
    <div style={{color: 'black'}} play={false}>

  <Marquee direction='left' pauseOnHover='true' gradientColor='#f12711' gradientWidth='200'>
  <card className='aviso'>"Jesús hijo de David ten compasión de mí."</card>
  <card className='aviso'>"Sagrado corazón de Jesús en voz confío."</card>
  <card className='aviso'>"Dulce corazón de María se la salvación del alma mia."</card>
   <card className='aviso'>"Jesús en ti confío."</card>
</Marquee>

    </div>

  )
}

export default Aviso