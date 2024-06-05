import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../media/providencia.jpg";
import './Providencia.css';



function Oracion(){

  return (
    <section className="providencia p-5" id="">
      <Container className=''>
        <Row className="align-items-center ">
         
          <Col size={12} md={6}>
         
                <h2 className='display-3 text-center'>Divina Providencia</h2>
                <h4 className='text-justify'>Una oración a la Divina Providencia al iniciar cada mes es una bella tradición que los católicos hemos recibido de nuestros mayores.</h4>
               
                    <Col  className="pb-5 text-justify text-white movLeft">
                     Oh Divina Providencia!
¡Concédeme Tu clemencia y Tu infinita bondad!
Arrodillado a Tus plantas
a Ti caridad portento.
Te pido para los míos:
casa, vestido y sustento.
Concédeles salud y
llévalos por el buen camino
y que sea siempre la virtud
la que los guíe en su destino.
Tú eres toda mi esperanza.
Tú eres el consuelo mío,
en Ti creo, en Ti espero y en Ti confío.
Tu, Divina Providencia se extienda en cada momento,
para que nunca nos falte:
casa, vestido y sustento,
ni los santos Sacramentos en el último momento.
Amén.
         </Col>    
          
          </Col>
          
           <Col size={12} md={6}>
          
                <img className=' p-1 w-100 img-thumbnail' src={contactImg} alt="Imagen"/>
             
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Oracion ;