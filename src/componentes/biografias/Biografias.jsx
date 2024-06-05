import Modali, { useModali } from "modali";
import imagen1 from '../../media/jose1.jpg';
import imagen2 from '../../media/mcr.jpg';
import imagen3 from '../../media/meb.jpg';
import imagen4 from '../../media/madre.jpg';
import imagen5 from '../../media/moca.jpg';
import imagen6 from '../../media/msj.jpg';
import '../biografias/Biografia.css';
import {p} from '../scraping/Scraping.js';

export const Biografias = () => {
  const [exampleModal, toggleExampleModal] = useModali();
  const [exampleModal1, toggleExampleModal1] = useModali();
  const [exampleModal2, toggleExampleModal2] = useModali();
  const [exampleModal3, toggleExampleModal3] = useModali();
  const [exampleModal4, toggleExampleModal4] = useModali();
  const [exampleModal5, toggleExampleModal5] = useModali();

  return (
    <div className="shadow-lg pt-5">
      <div className="container ">
      <h2 className='text-center display-5 py-3'>Todos estamos llamados a ser santos</h2>
      
       {p}
        <p className="text-center text-muted py-3">
          Francisco ha dedicado su catequesis de hoy a la vocación
          universal de ser santo, ¿en qué consiste, y cómo podemos llegar a serlo? «hay que
          tener en cuenta que la santidad no es algo que nos proporcionamos a nosotros mismos,
          que obtenemos con nuestras cualidades y nuestras habilidades -ha dicho-. La santidad es
          un don, es el regalo que nos hace el Señor Jesús, cuando nos lleva con Él, nos cubre de

          Él y nos hace como Él», ha dicho el Santo Padre. El Papa ha aseverado que «cualquier
        forma de vida lleva a la santidad si se vive en comunión con el Señor»
        </p>

        <div className="row py-3">
        
          <div className="card-bio col-md-4 mb-4 shadow p-3">
            <h4 className="fw-bold text-center py-3">
              Beato Dr. José Gregorio Hernández
            </h4>
            <div className="text-center">
            <img src={imagen1} alt='Jose G Hernández' className='w-25 img-bio'/>
            </div>
            <p className="text-justify">
              Nació en Isnotú, (Edo. Trujillo) el 26 de octubre de 1864,
              <br></br> Murió en Caracas, el 29 de junio de 1919
            </p>
          <button className="btn btn-dark" onClick={toggleExampleModal}>
              Leer Más...
            </button>
          </div>

          <Modali.Modal {...exampleModal}>
          <p className='text-justify p-3'>
              El Doctor José Gregorio Hernández nació en Isnotú, Estado Trujillo
              (Venezuela), el 26 de octubre de 1864. Como miembro de su familia
              y en su Pueblo fue ejemplar. Desde los 13 años, en 1877, fijó su
              residencia en Caracas.<br></br>
              Fue un estudiante sobresaliente y un científico notable. Doctorado
              en Medicina en 1888. Luego de un postgrado en París se dedicó al
              ejercicio profesional y a la docencia universitaria. Fundó las
              cátedras de Histología, Fisiología Experimental y Bacteriología en
              la Universidad Central de Venezuela. Isnotu Se distinguió por su
              fe inquebrantable, su castidad perfecta, su humildad y sencillez
              profunda, su excelencia profesional, su tierna devoción a la
              Virgen, y su gran amor a Dios y al prójimo. Su afán de perfección
              lo llevó a la Cartuja; pero el Señor, que los destinaba a servir
              de ejemplo a los seglares, profesionales e intelectuales de su
              Patria, por medio de la enfermedad, le impidió coronar sus anhelos
              de vida monástica o sacerdotal.
              <br></br>
              El 29 de junio de 1919, mientras llevaba medicinas a un enfermo
              necesitado, un automóvil puso fin a su vida ejemplar. El pueblo
              caraqueño, al saber de su muerte, exclamó: “¡Ha muerto un santo!”.
              En verdad fue un apóstol de la caridad. En el pueblo de Isnotú se
              erigió el Santuario al Dr. José Gregorio Hernández. Cientos de
              placas forran las paredes del santuario expresando el
              agradecimiento de las personas que han sido sanadas por su
              intercesión. Todos los días creyentes y peregrinos acuden a Isnotú
              a pagar su promesa por favores cumplidos por el venerable.
            </p>
          </Modali.Modal>

          <div className="card-bio col-md-4 mb-4 shadow p-3">
            <h4 className="fw-bold text-center py-3">
              Beata Madre Carmen Rendiles
            </h4>
            <div className="text-center">
            <img src={imagen2} alt='Carmen Rendiles' className='w-25 img-bio'/>
            </div>
            <p className="text-justify">
              La fundadora de las siervas de Jesús, nació el 11 de agosto de
              1903 en Caracas (Venezuela) y falleció el 9 de mayo de 1977. Pese
              a llegar al mundo sin su brazo izquierdo, la madre Carmen Rendiles
              no se detuvo en su afán por trabajar al servicio de Dios.
            </p>

            <button className="btn btn-dark" onClick={toggleExampleModal1}>
              Leer Más..
            </button>
          </div>

          <Modali.Modal {...exampleModal1}>
            <p className="p-3 text-justify">
              El 25 de febrero de 1927 ingresó a la Congregación Siervas de
              Jesús en el Santísimo Sacramento, una comunidad creada en Francia
              para mujeres religiosas.<br></br>A los 33 años de edad asumió la
              docencia de las novicias en la capital venezolana, para luego, en
              1947, fue nombrada madre superiora de la casa. Más tarde, en 1951
              fue designada superiora provincial.<br></br>
              Fue beatificada, frente al fervor de cientos de feligreses que
              acudieron al Estadio Universitario de Caracas, para presenciar el
              santo momento, en una ceremonia que estuvo presidida por el
              Prefecto de la Congregación para las Causas de los Santos,
              Cardenal Angelo Amato
            </p>
          </Modali.Modal>

          <div className="card-bio col-md-4 mb-4 shadow p-3">
            <h4 className="fw-bold text-center py-3">
              María Esperanza de Bianchini
            </h4>
            <div className="text-center">
            <img src={imagen3} alt='Maria de Bianchini' className='w-25 img-bio'/>
            </div>
            <p className="text-justify">
              María Esperanza de Bianchini (22 de noviembre de 1928 – 7 de
              agosto de 2004) también conocida como "Sierva de Dios María
              Esperanza", fue una mística venezolana, nacida en Barrancas en el
              estado Monagas, cerca del río Orinoco.
            </p>

            <button className="btn btn-dark" onClick={toggleExampleModal2}>
              Leer Más...
            </button>
          </div>

          <Modali.Modal {...exampleModal2}>
            <p className="p-3 text-justify">
              El 31 de enero de 2010 en la catedral (católica) de San Francisco
              de Asís en Metuchen, New Jersey, la causa para la beatificación y
              canonización de María Esperanza fue abierta por el obispo Paul
              Bootkoski de la Diócesis de Metuchen que, en este acto, le dio el
              título de Sierva de Dios. Las apariciones marianas de María
              Esperanza fueron aprobadas por el obispo local.
              <br></br>
              Siendo aún joven, María Esperanza había considerado convertirse en
              monja e ingresó a un convento, pero le fue revelado en una visión
              el 3 de octubre de 1954 que su vocación era la vida matrimonial.
              Se dice que en una visión, San Juan Bosco le dijo que se
              encontraría con su esposo el 1 de noviembre de 1955. Su matrimonio
              se llevó a cabo el 8 de diciembre de 1956, en una capilla de la
              Basílica de San Pedro en Roma. Era particularmente devota de santa
              Teresa de Lisieux - la "Pequeña Flor". Los creyentes sostienen
              que, desde su juventud, vivió una vida de virtud y fidelidad a
              Dios y recibió los dones de conocimiento sobrenatural, la
              curación, la aparición, discernimiento de espíritus, locución,
              éxtasis, levitación, el olor de santidad, los estigmas y la
              capacidad de leer los corazones de los demás. La historia de la
              Virgen de Betania se encuentra directamente relacionada a una
              mujer venezolana llamada María Esperanza Medrano de Bianchini,
              quien desde muy niña vivió apariciones de Santa Teresita del Niño
              Jesús y de la Virgen, entre otros fenómenos.
            </p>
          </Modali.Modal>

          <div className="card-bio col-md-4 mb-4 shadow p-3">
            <h4 className="fw-bold text-center py-3">
              Madre Candelaria de San José
            </h4>
            <div className="text-center">
            <img src={imagen4} alt='Madre San José' className='w-25 img-bio'/>
            </div>
            <p className="text-justify">
              Susana Paz Castillo Ramirez - (Madre Candelaria de San José),
              Nació en Altagracia de Orituco (Edo. Guárico) el 11 de Agosto de
              1863 y murió en Cumaná, el 31 de Enero de 1940.
            </p>

            <button className="btn btn-dark" onClick={toggleExampleModal3}>
              Leer Más...
            </button>
          </div>

          <Modali.Modal {...exampleModal3}>
            <div className="p-3 text-justify">
              Hija de Don Francisco de Paula Paz Castillo y María del Rosario
              Ramírez. Sus abuelos maternos fueron Don Antonio Paz Castillo y
              Bolívar y Doña Candelaria Pérez y Bolívar, siendo Doña Candelaria
              prima hermana del Libertador Simón Bolívar, residenciados en
              Caracas, vecinos de la parroquia de la Candelaria y muy devotos de
              la Virgen en esta advocación. La Madre Candelaria de San José
              creció en una familia de muchos valores cristianos, su padre fue
              un hombre de gran corazón, que gozaba del aprecio de las personas
              que habitaban en ese entonces Altagracia de Orituco. Tenía
              conocimientos de medicina. No tenía carrera ni título, pero poseía
              un buen cúmulo de conocimientos prácticos, que le hacían muy útil
              a sus semejantes y los empleaba para ayudar a mucha gente. Su
              madre, fue una mujer trabajadora, honrada, hacendosa y buena. De
              ella aprendería Susana su devoción al “Ave María”. En este
              ambiente familiar de piedad, transcurren los primeros años de
              Susana; lo que contribuyó a formar en ella una piedad sencilla,
              pero sólidamente fundada en las virtudes cristianas.
              <br></br>
              Murió en la madrugada del 31 de enero de 1940, a los 77 años. En
              sus últimos segundos de vida, tras pronunciar tres veces el nombre
              de Jesús, se apagó la vida de esta gran mujer. Después de un largo
              proceso La Madre Candelaria de San José fue beatificada el 27 de
              Abril del 2008 en una misa calificada como "histórica" por la
              Iglesia venezolana. Realizada el estadio universitario de la UCV,
              Caracas y con la presencia de más de 50 mil feligreses. El enviado
              del Papa señaló que la fiesta de la nueva beata se celebrará el 1
              de febrero.
            </div>
          </Modali.Modal>

          <div className="card-bio col-md-4 mb-4 shadow p-3">
            <h4 className="fw-bold text-center py-3">
              Mons. Salvador Montes de Oca
            </h4>
            <div className="text-center">
            <img src={imagen5} alt='Monte de Oca Salvador' className='w-25 img-bio'/>
            </div>
            <p className="text-justify">
              Mons. Salvador Montes de Oca, Pastor y Mártir, Obispo Venezolano
              de Valencia Fusilado por Tropas Nazis en Italia
            </p>

            <button className="btn btn-dark" onClick={toggleExampleModal4}>
              Leer Más...
            </button>
          </div>

          <Modali.Modal {...exampleModal4}>
            <p className="p-3 text-justify">
              Mons. Salvador Montes de Oca nació en Carora, estado Lara,
              Venezuela, el 21 de octubre de 1895, y murió el 06 de septiembre
              de 1944, fusilado por las tropas nazis en Italia, junto a otros
              hermanos de la comunidad, por acoger con caridad cristiana a los
              perseguidos de la guerra.<br></br>
            </p>
          </Modali.Modal>

          <div className="card-bio col-md-4 mb-4 shadow p-3">
            <h4 className="fw-bold text-center py-3">
              Madre María de San José
            </h4>
            <div className="text-center">
            <img src={imagen6} alt='María de San José' className='w-25 img-bio'/>
            </div>
            <p className="text-justify">
              Laura Evangelista Alvarado Cardozo, la Madre María de San José.
              Hija de Clemente Alvarado y Margarita Cardozo, nació en Choroní,
              Estado Aragua, Venezuela, el 25 de Abril de 1875.
            </p>

            <button className="btn btn-dark" onClick={toggleExampleModal5}>
              Leer Más...
            </button>
          </div>

          <Modali.Modal {...exampleModal5}>
            <p className="p-3 text-justify">
              Desde su infancia llevó una vida cristiana ejemplar dedicada a
              Dios y al servicio de los más necesitados. Los estudios primarios
              los inició en su pueblo natal y los culminó en Maracay. Desde muy
              temprana edad se dedicó a la enseñanza y la preparación de los
              niños que recibían la primera comunión. En noviembre de 1893, al
              ser fundado el hospital San José por el presbítero Vicente López
              Aveledo, párroco de Maracay, se dedicó al cuidado de los enfermos
              como hermana hospitalaria y junto con otras jóvenes de igual
              vocación, el 22 de enero de 1901 fue consagrada como hermana
              hospitalaria agustina, adoptando el nombre de Sor María de San
              José.
              <br></br>A pocos días de cumplir 92 años de vida, falleció en la
              Casa Hogar Agustinas Recoletas de Maracay la Madre María de San
              José, un ejemplo férreo e incansable de lucha por las causas
              justas y promotora invaluable del amor a Dios y la verdadera fe
              cristiana.
            </p>
          </Modali.Modal>
        </div>
      </div>
    </div>
  );
};
