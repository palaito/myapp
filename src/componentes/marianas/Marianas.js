import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imagen from '../../media/R.jpg';

let d = new Date().getDate();
let m = new Date().getMonth() + 1;
let f = d + '-' + m;

//console.log(f);
const Marianas = () => {

  return (

    <section className="contact" id="connect">

      {f === '14-1' ? (
        <Container className='pt-5'>
          <Row className="align-items-center">
            <Col size={12} md={6}>

              <img className='imagen ' src='https://hablemosdereligion.com/wp-content/uploads/2017/09/Virgen-de-la-Divina-Pastora-1024x680.jpg' alt="Imagen" />

            </Col>

            <Col size={12} md={6}>

              <h2 className='pt-5 display-3 movLeft text-center'>La Virgen de la Divina Pastora</h2>
              <h5 className="text-center lead">Peregrinación Más Grande de Venezuela y Tercera en el Mundo</h5> 
              <p className="text-center text-uppercase fw-bold text-bg-dark ">Celebración 14 de Enero</p>
              <Col className="pb-5 text-justify text-light">
                La Divina Pastora, es una de las más veneradas en Venezuela, su origen proviene de una advocación Mariana y tiene su templo de veneración en Barquisimeto, Estado Lara, la Basílica Menor de Santa Rosa de Lima, situada en la Parroquia Santa Rosa de esta ciudad.

                Cada viaje de la Divina Pastora es un encuentro con la fe y la espiritualidad. La Virgen,
                imagen bondadosa, convoca la esperanza del pueblo que cada <b>14 de enero</b> adelanta el
                manecer para llenarse de oración, cánticos y alabanzas a la Patrona que es madre buena....

                Uno de los principales hechos que dio fuerza a la veneración de la Divina Pastora fue
                cuando durante el terremoto que devastó a Venezuela el 26 de marzo de 1812, (Jueves Santo)
                se desplomó por completo el templo de Santa Rosa, excepto el nicho en donde se encontraba la
                Divina Pastora, que permaneció intacto. Esto fue interpretado como un hecho providencial del
                poder de Dios y la intercesión de la Virgen María para la protección de sus creyentes.
                Cabe
                destacar que el nicho del terremoto reposa en el Museo de Santa Rosa.
                Es considerada la tercera peregrinación más grande del mundo, detrás de la Virgen de
                Guadalupe en México y la Virgen de Fátima en Portugal. De igual manera, se considera la
                peregrinación más grande del mundo debido a que es la única imagen que sale de su templo
                a recorrer gran parte de la ciudad. Es la procesión Mariana más grande del mundo en lo
                que respecta a asistencia.
              </Col>
            </Col>
          </Row>
        </Container>
      ) : ''}

      {f === '18-4' ? (
       <Container className='pt-5'>
          <Row className="align-items-center">
            <Col size={12} md={6}>
            <figure className=''>
              <img className='imagen' src={imagen} alt="Imagen" />

            </figure>

            </Col>
            <Col size={12} md={6}>

              <h2 className='pt-5 display-3 movLeft text-center'>María, Virgen Reconciliadora de Todos los Pueblos y Naciones</h2>
<h5 className="text-center lead text-light">Finca Betania, estado de Miranda, Venezuela</h5>
<p className="text-center text-uppercase fw-bold">Celebración 25 de Marzo</p>

              <Col className="pb-5 text-justify">
                Primera aparición: 25 de Marzo de 1976, (fiesta de la Anunciación). En esta ocasión solo María Esperanza vio a la Virgen. En apariciones posteriores otras personas también la vieron. El lugar de las apariciones es la finca de Betania (Betania significa casa de aflicción).
                <br></br>
                El 25 de marzo 25 de 1984, domingo, después de una misa con motivo del aniversario, unas 150 personas vieron a la Virgen sobre la cascada (108 lo testificaron con su firma). Apareció bajo siete advocaciones distintas (Lourdes, del Carmen, La Milagrosa y otras. Al final con el Niño en su brazo derecho como para entregárnoslo). Al terminar, toda la vegetación parecía arder. Fue enorme la impresión de todos con el ansia de un cambio profundo en sus vidas.
                Desde entonces han sido numerosas las apariciones, en particular los sábados, domingos y fiestas marianas. Según la instrucción del Obispo de Los Teques, monseñor Pío Bello Ricardo S. J., los videntes llegaron a ser unas 2000 personas.

                <b>La Virgen impartió muchas enseñanzas:</b>
                Reconciliación como camino para recibir la gracia / llevar la cruz / fe como base del cristianismo/ obediencia a la moral y doctrina de la Iglesia / servicio / vida evangélica / amor al Corazón de Jesús / evangelizar, Oración... Meditación... Penitencia... Eucaristía...
              </Col>
            </Col>
          </Row>
        </Container>
      ) : ''}

      {f === '11-9' ? (
        <Container className='pt-5'>
          <Row className="align-items-center">
            <Col size={12} md={6}>

              <img className='imagen' src="https://www.aciprensa.com/imagespp/NuestraSenoradeCoromoto_YouTube.jpg" alt="Imagen" />

            </Col>
            <Col size={12} md={6}>

              <h2 className='pt-5 display-3 movLeft text-center'>La Virgen de Coromoto</h2>
              <h5 className="text-center ">Nuestra Señora de Coromoto, patrona de Venezuela,
                renueva la Fe, en toda la extensión de nuestra patria. Amén.</h5>
              <p className="text-center text-uppercase fw-bold">Celebración 11 de Septiembre</p>

              <Col className="pb-5 text-justify text-light">
                La aparición de Coromoto es única y muy importante porque:
                La reliquia que la Virgen le dejó al Cacique Coromoto proviene directamente del cielo. No es un grabado ni de hechura humana.
                <br></br>
                Es la primera aparición de la Virgen a una familia.
                <br></br>
                Es una de las pocas apariciones cuya advocación tiene el nombre del vidente y en este caso es un nombre masculino: Coromoto.
                <br></br>
                Solo hay dos casos en el mundo en que la Virgen deja una reliquia: Guadalupe, México en 1531 y Coromoto, Venezuela en 1652.
                <br></br>
                - La reliquia en Guadalupe es un macro: 1.70 x 1,05 cm.<br></br>
                - La reliquia en Coromoto es un micro: 2,43 x 1,94 cm.
              </Col>
            </Col>
          </Row>
        </Container>
      ) : ''}

{f === '08-9' ? (
        <Container className='pt-5'>
          <Row className="align-items-center">
            <Col size={12} md={6}>

              <img className='imagen' src="https://hablemosdereligion.com/wp-content/uploads/2017/08/La-Virgen-del-Valle-13-e1503110899289.jpg" alt="Imagen" />

            </Col>
            <Col size={12} md={6}>

              <h2 className='pt-5 display-3 movLeft text-center'>La Virgen del Valle</h2>
              <h5 className="text-center ">“Bendita seas por siempre, Madre Nuestra”.</h5>
              <p className="text-center text-uppercase fw-bold text-light">Celebración 08 de Septiembre</p>

              <Col className="pb-5 text-justify">
                La Virgen del Valle, conocida también como Nuestra Señora del Valle del Espíritu Santo, es una advocación de la Virgen María originada en el Estado de Nueva Esparta, Venezuela. Se la venera en los Estados de Sucre, Anzoátegui, Nueva Esparta, Monagas, Delta Amacuro, parte de Bolívar, y en la ciudad de Zaraza en el Estado Guárico. Es patrona del Oriente venezolano; así como de los pescadores y de la Armada Bolivariana (FANB). El 15 de agosto de 1910 el Pío X, concede la Coronación canónica para Nuestra Señora del Valle según Decreto de la Sagrada Congregación Romana. Pero no es hasta el 8 de septiembre de 1911 que el Obispo Antonio María Durán (Diócesis de Santo Tomás de Guayana) realizara la Coronación de la Virgen, por lo que es ese día que se toma para la celebración de su día.
      <br></br>
      Algunos de los títulos que recibe la Virgen del Valle son: Virgen Milagrosa, Madre de los pescadores, Patrona de los marineros, Protectora de los Neoespartano, Niña del Valle y Reina de Oriente.
              </Col>
            </Col>
          </Row>
        </Container>
      ) : ''}

{f === '15-8' ? (
        <Container className='pt-5'>
          <Row className="align-items-center">
            <Col size={12} md={6}>

              <img className='imagen' src="https://forosdelavirgen.org/wp-content/uploads/2014/08/ns-de-la-consolacion-tariba-chica-500x362.jpg" alt="Imagen" />

            </Col>
            <Col size={12} md={6}>

              <h2 className='pt-5 display-3 movLeft text-center'>La Virgen de la Consolación</h2>
              <h5 className="text-center">Nuestra Señora de Consolación de Táriba, una Tablilla Resplandece.</h5>
              <p className="text-center text-uppercase fw-bold">Celebración 15 de Agosto</p>

              <Col className="pb-5 text-justify">
               En 1560 dos padres Agustinos venidos del Nuevo Reino de Granada llegan a Táriba, llevando de San Cristóbal una tabla con la imagen de nuestra Señora de la Consolación.
      <br></br>
      En 1600 se construye una ermita para la veneración de la excelsa Virgen. Desde entonces para acá, Nuestra Señora de la Consolación, es el centro devocional de Táriba, y la más preciada reliquia de sus buenas y cristinas gentes.
      <br></br>
      El 15 de agosto se celebra su fiesta, con solemne Pontifical y sermón de circunstancias. Y es entonces cuando el amor a Nuestra señora de la consolación se desborda por todas partes, lleno de unción de fe y de esperanza, y cuando la piedad de tachirenses, de venezolanos y de muchos colombianos abre caminos de luz para venirse a postrar a sus plantas maternales.
      <br></br>
      Numerosas son las curaciones hechas a los primeros devotos de la Virgen de Táriba, así como se cuentan, por miles de miles, las mercedes concedidas a través de cuatro siglos, muchas son sus manifestaciones extraordinarias.
              </Col>
            </Col>
          </Row>
        </Container>
      ) : ''}


{f === '18-11' ? (
        <Container className='pt-5'>
          <Row className="align-items-center">
            <Col size={12} md={6}>

              <img className='imagen' src="https://th.bing.com/th/id/OIP.U0kwNzFD5PmNCyuRFRukZAHaHZ?rs=1&pid=ImgDetMain" alt="Imagen" />

            </Col>

            <Col size={12} md={6}>

              <h2 className='display-3 movLeft text-center'>Virgen de La Chiquinquirá</h2>
              <h5 className="text-center">Nuestra Señora de Consolación de Táriba, una Tablilla Resplandece.</h5>
               <Col className="pb-5 text-justify">
               La devoción a La Chinita, que data desde el 18 de noviembre de 1709, es una de las
                fiestas tradicionales de Venezuela más alegres y genuinas manifestaciones del fervor religioso de Venezuela, donde destacan las misas, serenatas y procesiones en honor a la Virgen, al son de la gaita zuliana.
        <br></br>
        La imagen de la Virgen de Chiquinquirá, ‘La Chinita’, es una pintura al óleo sobre madera 
        resinosa; una “tablita”, cuyas dimensiones son: 26 centímetros de alto, por 25 de ancho y 3 milímetros de espesor. Según la tradición zuliana, la “tablita” fue encontrada en 1709 por una sencilla mujer, flotando sobre las olas, cuando acababa de lavar su ropa en las orillas del lago de Maracaibo.
        <br></br>
        En la actualidad la casa donde se efectuó el hallazgo se levanta un majestuoso templo, la 
        Basílica de Nuestra Señora de Chiquinquirá, ubicada en el centro de la ciudad de Maracaibo
         y en la que se encuentra la “tablita” de la Virgen.
              </Col>
            </Col>
          </Row>
        </Container>
      ) : ''}

  </section>

  )
}

export default Marianas