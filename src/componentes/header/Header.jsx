import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import './Header.css';


function Header() {
   let imagen = 'https://cdn.pixabay.com/photo/2016/11/29/12/39/recording-studio-1869560_960_720.jpg';
   let radio ='https://radio-zikoxweb.radioca.st/stream';

   return (
    <section className='card'>
    <img className='img' src={imagen} alt='Header'/>
    <div className="card-img-overlay" >
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-auto">
          <h1 className="mb-3 display-1 fw-bold">Jesús Hombre Salvador</h1> 
           <h4 className="text-light">Yo soy el camino, la verdad y la vida. Nadie viene al Padre sino a través de mí</h4>
            <p className='bg-light rounded-5 p-3 col-lg-p-1'>Colocamos este día que nace,
                    vengo a pedirte Salud, trabajo, entendimiento, paz, sabiduría y fuerza.</p>
          <div className='row justify-content-center align-items-center 
          justify-content-lg-start align-items-lg-start h-100'>
          <div>
           <AudioPlayer src={radio} className='rounded-5 col-lg-6 col-sm-4'/>
          </div>
        </div>

      </div>
    </div>
</div>

  </section>
  )
}

export default Header