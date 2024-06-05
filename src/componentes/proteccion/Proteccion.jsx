import React from 'react'
import renuncia from '../../audios/renuncia.mp3';
import AudioPlayer from 'react-h5-audio-player';

function Proteccion() {
  return (
    <div className='py-5 color-fondo2'>
    <div className='container  py-5'>
    <h2 className='display-3 '>Oración de Renuncia y Liberación </h2>
   <p className='text-justify text-light'> Cuando nos adivinaron la suerte, a través del tarot, cartomancia, o de cualquier forma, y más aún, si practicaste o aprendiste cosas de ocultismo, esoterismo, brujeria, etc., sin duda ni temor a equivocarme, te puedo asegurar -por revelaciones privadas del Señor- que han quedado PUERTAS ABIERTAS, (incluso los hermanos no católicos saben esto), y el Enemigo entrará y nos atacará con mayor facilidad, porque al practicar las cosas del Diablo, le dimos derecho legal al Diablo.
</p>
<p className='text-justify fw-bold text-light'>
Pero eso puede detenerse. Esta Oracion es para CERRAR las puertas espirituales -que por error o ignorancia- le hemos abierto al Enemigo. Es por esto que la dirige un Exorcista Franciscano ( el de la voz).
</p>

 <AudioPlayer  src={renuncia} className="rounded-5 col-lg-6 col-sm-4"/>
    </div>
    </div>
  )
}

export default Proteccion