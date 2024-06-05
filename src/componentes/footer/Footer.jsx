import React from 'react';
import {FaTelegram} from 'react-icons/fa';
import {FaWordpress} from 'react-icons/fa';

function Footer() {
  return (
 <>
<footer className="color-fondo2 text-light text-center text-lg-start pt-4">

  <div className="container p-4">
   
    <div className="row">
      
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase display-5">Acordaos</h5>

        <p className='text-justify'>
          Acordaos, 
oh piadosísima Virgen María, 
que jamás se ha oído decir 
que ninguno de los que han acudido 
a tu protección, 
implorando tu asistencia 
y reclamando tu socorro, 
haya sido abandonado de ti. 
Animado con esta confianza, 
a ti también acudo, oh Madre, 
Virgen de las vírgenes, 
y aunque gimiendo 
bajo el peso de mis pecados, 
me atrevo a comparecer 
ante tu presencia soberana. 
No deseches mis humildes súplicas, 
oh Madre del Verbo divino, 
antes bien, escúchalas 
y acógelas benignamente. Amén
        </p>
      </div>
     
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase display-5">Bendita sea tu pureza </h5>

        <p className='text-justify'>
         Bendita sea tu pureza y eternamente lo sea,
pues todo un Dios se recrea, en tan graciosa belleza.
A ti celestial princesa, Virgen Sagrada María,
te ofrezco en este día, alma vida y corazón.
Mírame con compasión, no me dejes, Madre mía,
ahora y en mi última agonía,
sé mi amparo y protección.

Amén.
        </p>
      </div>
   
    </div>


 </div>
 <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
 <a className='p-2 text-light' href='https://t.me/orardiario'><FaTelegram /></a>
  <a className='p-2 text-light' href='https://orardiario.wordpress.com/'><FaWordpress /></a>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-secondary' href='https://jhs.orgfree.com/'>
          JHS
        </a>
      </div>
</footer>
  
 </>
   
  )
}

export default Footer