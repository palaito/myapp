import React from 'react'
import './Sr.css';
import { useRef } from "react";
import imagen from '../../media/familia.svg';


function Sr({ misterio, contenido, nota, audioR }) {
    
    let audio = new Audio(audioR);
    let valor = false;
//console.log(audio.play)
    const textoRef = useRef();
  
    const start = () =>{
      if(!valor){
        audio.play();
        valor=true;
        //console.log(textoRef);
       textoRef.current.textContent = 'PLAY'
      }else{
        audio.pause();
        valor=false;
        textoRef.current.textContent = 'PAUSA'
      }
    }
    //console.log(misterio)
    return (
      <div className='row m-0 p-0 pb-5' >
        <div className='col-lg-6 col-sm-12'>
        <div className=' text-center pt-4'>
           
            <div className='text-center'>
                <p>1. {contenido.uno}</p>
                <p>2. {contenido.dos}</p>
                <p>3. {contenido.tres}</p>
                <p>4. {contenido.cuatro}</p>
                <p>5. {contenido.cinco}</p>
            </div>
            <p className='lead text-secondary'>{nota} </p>
            <div className=''>
        <button onClick={start} className='btn btn-outline-dark' ref={textoRef}>Santo Rosario</button>
      </div>
        </div>
        </div>
        <div className='col-lg-6 col-sm-12 movLeft'>
          <div className='text-center pt-3'>
          <img src={imagen} alt='Santo Rosario' className='w-50 '/>
          
        </div>
        <div className='text-center'><strong>{misterio}</strong> </div>
        </div>
        </div>
    )

}
export default Sr