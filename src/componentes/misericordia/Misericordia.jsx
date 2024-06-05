import React, {Suspense}from 'react'
import './Misericordia.css';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import misericordia from '../../audios/divina.mp3'
//import imagen from '../../media/misericordia.webp';

function Misericordia() {

 
   let imagen = 'https://cdn.pixabay.com/photo/2018/03/10/18/10/eucharist-3214782_1280.jpg';
   
   let h = new Date().getHours();

  // function sayHi(person) {
//   const name = person.name;
//   setTimeout(() => {
//     alert('Hello, ' + name);
//   }, 24000);
// }

// let someone = {name: 'Dan'};
// //sayHi(someone);

  return (
      <div className='card'>
    <img className='img-fluid' src={imagen} alt='Misericordia'/>
    <div className="card-img-overlay" >
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-auto ">
        <div className='container'>
          <h3 className="mb-3 text-light display-3 ">La oración para las tres de la tarde.</h3>
          <h2 className='display-5'>Divina Misericordia</h2>
           <p className="text-light">
            
          La hora de la agonía de Jesús, es decir, las tres de la tarde, es un tiempo muy especial en la devoción a la Divina Misericordia.<br/>
          En esta hora procuramos permanecer en espíritu al pie de la Cruz de Cristo, a fin de suplicar la misericordia para uno mismo y para el mundo entero en virtud de los méritos de su Pasión. 
        
           </p>
         
            <p className='text-light'>
            	   
         Jesús se dio a conocer a la religiosa polaca Santa María Faustina Kowalska (1905-1938)
            y le pidió dar a conocer la misericordia divina
        <br/>
             Es sumamente fácil de rezar. Jesús se da a conocer a santa Faustina:</p>
          <p className="text-justify text-light"> "Se reza con un Rosario común, al modo siguiente: Primero rezarás una vez el Padre nuestro, el Ave María y el Credo. Después,
            en las cuentas correspondientes al Padre nuestro, dirás las siguientes palabras: 'Padre Eterno, Te ofrezco el
            Cuerpo y la Sangre, el Alma y la Divinidad de tu Hijo Hijo, nuestro Señor Jesucristo, como la propiciación de
            nuestros pecados y el mundo entero En las cuentas del Ave María, dirás las siguientes palabras: 'Por Su dolorosa
            Pasión, diez misericordia de nosotros y el mundo entero'. Para terminar, dirás tres veces estas palabras:
            'Santo Dios, Santo Fuerte, Santo Inmortal, diez misericordia de nosotros y del mundo entero' ... ”.
            </p>
          <Suspense fallback={<div>Loading...</div>}>
          <AudioPlayer src={misericordia} className='rounded-5 col-lg-6 col-sm-4'/>
          </Suspense>
      </div>
        <div className='py-4'>
          { h === 15 ? (
            <div className="alert alert-light lead rounded-5 " role="alert">
              <strong> Son las 3 PM </strong> Hora de la Divina Misericordia
            </div>
          ) :
           ''}
          </div>
    </div>
    </div>
</div>
  </div>
  )
}


export default Misericordia

 