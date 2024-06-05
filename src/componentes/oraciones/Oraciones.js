import Modali, { useModali } from 'modali';


export const Oraciones = () => {
  const [exampleModal, toggleExampleModal] = useModali();
  const [exampleModal1, toggleExampleModal1] = useModali();
const [exampleModal2, toggleExampleModal2] = useModali();

  return (
    <div className='shadow-lg pt-5'>
    <div className="container">
    <h4 className='text-center'>Podemos descansar seguros en la fe de que Dios,
           que es el Dios de los milagros, escucha nuestras oraciones
      </h4>

     <div className="row">
            <div className="col-md-4 mb-4 shadow p-3">

                <h4 className="fw-bold text-center py-3">Oraciones de Sanación</h4>
                <p className="text-justify">
                  Oración de sanación es una oración por la salud que le ofrecemos a nuestro 
                  señor, con el fin de que el todopoderoso sane nuestros cuerpos y nuestras alma.
                </p>

                  <button className='btn btn-dark' onClick={toggleExampleModal}>
        Sanación
      </button>
              </div>


      <Modali.Modal {...exampleModal}>
         <p className='p-3 text-justify'> Padre Dios Todopoderoso, fuente de la salud y del consuelo, que has dicho “Yo soy 
       el que te da la salud”.Acudimos a ti en este momento en el que por la enfermedad 
       experimentamos la fragilidad de nuestros cuerpos. Ten piedad Señor de los que están sin 
       fuerza, devuelves la salud y quedaran sanos. Has efectivos los  tratamientos médicos. 
       Líbrales de los efectos secundarios de la medicina y has que lo que la medicina no  
       puede hacer. Realiza un milagro de tu amor y concédeles la salud del cuerpo, 
       la paz en el alma, para que libres de toda enfermedad y recobradas las fuerzas, 
       puedan servirte mejor a ti y a nuestros hermanos. Lo
        pedimos en el nombre de tu Hijo Jesucristo, con la Virgen María nuestra madre, 
        orando en la fuerza del Espíritu Santo, a ti que vives y reinas por los siglos de los 
        siglos. Amén</p>
      </Modali.Modal>

               <div className="col-md-4 mb-4 shadow p-3">

                <h4 className="fw-bold text-center py-3">Oración de Protección</h4>
                <p className="text-justify">
                 Jesús ha estado diciendo con bastante insistencia que debemos rezar para protegernos
                 de la influencia del demonio. Este causa muchos sufrimientos.
                </p>

                  <button className='btn btn-dark' onClick={toggleExampleModal1}>
        Protección
      </button>
              </div>

      <Modali.Modal {...exampleModal1}>
         <p className='p-3 text-justify'> 
         San Miguel Arcángel, defiéndenos en la batalla. Sé nuestro amparo contra las perversidad
         y asechanzas del demonio. Reprímale Dios, pedimos suplicantes, y tu príncipe de la milicia 
         celestial arroja al infierno con el divino poder a Satanás y a los otros espíritus 
         malignos que andan dispersos por el mundo para la perdición de las almas. Amén.
       </p>
      </Modali.Modal>

      <div className="col-md-4 mb-4 shadow p-3">

                <h4 className="fw-bold text-center py-3">Oración para la Depresión</h4>
                <p className="text-justify">
                  No importa cuál sea la causa de la depresión, la oración siempre ayuda y aún más, 
                  cuando es
                  realizada con fe y devoción todos los dias confiando en Dios. 
                </p>

                  <button className='btn btn-dark' onClick={toggleExampleModal2}>
        Depresión
      </button>
              </div>

      <Modali.Modal {...exampleModal2}>
         <p className='p-3 text-justify'>
         Oh Cristo Jesús, cuando todo es oscuridad y sentimos nuestra debilidad e impotencia, danos el sentido de tu presencia, tu amor y tu fortaleza Ayúdanos a tener una confianza perfecta en tu amor protector y la fortaleza de tu poder, de manera que nada pueda asustarnos o preocuparnos, para que, los que vivamos cerca de Ti, Veamos tu mano, tu propósito, tu voluntad a través de todas las cosas. Amén. Oración escrita por San Ignacio de Loyola 
       </p>
      </Modali.Modal>
      </div>
    </div>
  </div>
  );
};

