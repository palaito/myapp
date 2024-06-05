import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../media/pray.svg";


function Oracion(){



  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          
                <img className='' src={contactImg} alt="Contact Us"/>
             
          </Col>
          <Col size={12} md={6}>
         
                <h2 className='display-3 movLeft'>Alma de Cristo</h2>
                
               
                    <Col  className="pb-5 text-justify">
                     Alma de Cristo, santifícame.
                    Cuerpo de Cristo, sálvame.
                    Sangre de Cristo, embriágame.
                    Agua del costado de Cristo, lávame.
                    Pasión de Cristo, confórtame.
                    ¡Oh, buen Jesús!, óyeme.
                    Dentro de tus llagas, escóndeme.
                    No permitas que me aparte de Ti.
                    Del maligno enemigo, defiéndeme
                    En la hora de mi muerte, llámame.
                    Y mándame ir a Ti.
                    Para que con tus santos te alabe.
                    Por los siglos de los siglos. Amén
                    </Col>
                  
                   
                  
              
          
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Oracion ;