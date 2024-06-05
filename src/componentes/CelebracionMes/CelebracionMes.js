import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './CelebracionMes.css';

let m = new Date().getMonth() + 1;

export const CelebracionMes = () => {
	return (
		<section className='color-fondo2'>

		{m === 1 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'>Enero está dedicado al Niño Jesús</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center">
			
			
            <Col size={12} md={6}>
			
			<img className='w-50' src='https://cdn.pixabay.com/photo/2024/03/22/22/31/ai-generated-8650583_1280.jpg' alt="Imagen" />
			
            </Col>
			
            <Col size={12} md={6}>
			
            
			<p className="animeText text-center fs-5">Para que al nombre de Jesús toda rodilla se doble en los cielos, en la tierra y en los abismos</p> 
			
			<Col className="pb-5 text-justify text-light">
			El mes de enero está dedicado al Niño Jesús y, en particular, al Santísimo Nombre de Jesús. Ocho
			días después de Navidad se honra la devoción del Santísimo Nombre de Jesús, para celebrar el
			día en que San José lo circuncidió y le dio el nombre. Este devocional se ha celebrado
			desde los orígenes de la Iglesia. De hecho, parece que ya los santos Pedro y Pablo contribuyeron
			a su difusión, y más tarde, en la época medieval, San Francisco de Asís fue un propagador.
			San Bernardino y sus cofrades lo convirtieron en una fiesta litúrgica. La devoción del Santísimo
			Nombre de Jesús se centra en el poder del nombre de Jesús, para los
			fieles, protección contra el mal, contra demonios, enfermedades y debilidades. Jesús habría
			revelado a Sor Saint-Pierre, carmelita de Tours, Apóstol de la Reparación, la devoción al
			Santo Nombre de Jesús.
			<br></br>
			Que el santísimo, sacratísimo, adorable, incomprehensible e inefable Nombre de Dios sea por
			siempre alabado, bendecido, amado, adorado y glorificado en el Cielo, en la Tierra y bajo la
			Tierra, por todas las criaturas de Dios y por el Sagrado Corazón de Nuestro Señor Jesucristo
			en el Santísimo Sacramento del Altar. Amén
			</Col>
            </Col>
			</Row>
			</Container>
		) : ''}
		
		{m === 3 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'>Marzo devoción a San José</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center pb-4">
			
			
            <Col size={12} md={6}>
			
			<img className='imagen' src='https://images.pexels.com/photos/11444321/pexels-photo-11444321.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Imagen" />
			
            </Col>
			
            <Col size={12} md={6}>
			
            
			<p className="animeText text-center fs-5 ">
			San José: que aprendamos de ti cada día a amar y a servir más y mejor a Jesús y a María
			</p> 
			
			<Col className="pb-5 text-justify text-light">
			Es el mes de la devoción a san José, porque su fiesta mayor es el día 19 de marzo: san José, el esposo de la Virgen; el hombre justo que tuvo la honra y la gloria de ser escogido por Dios para se el padre adoptivo de su hijo hecho hombre.
			
			Le tocó a José darle el nombre de Jesús. En este mes la Iglesia nos invita a mirar este modelo de padre amoroso, esposo fiel y casto, trabajador dedicado, listo a hacer, sin demora la voluntad de Dios. La Iglesia le rinde culto de “protodulia” (primera veneración).
			
			Existen muchas oraciones dedicadas a san José, la letanía en su honor, el rosario de san José, etc..
			<br></br>
			Santa Teresa de Ávila dijo que siempre que le pedía algo a san José, en una de sus fiestas (19 de marzo o 1 de mayo), nunca dejó de ser escuchada. Todos sus Carmelos reformados tuvieron el nombre de san José.
			<br></br>
			Oh Glorioso Patriarca San José, heme aquí, postrado de rodillas ante vuestra presencia, para pediros vuestra protección.
			
			Desde ya os elijo como a mi padre, protector y guía. Bajo vuestro amparo pongo mi cuerpo y mi alma, propiedad, vida y salud. Aceptadme como hijo vuestro. Preservadme de todos los peligros, asechanzas y lazos del enemigo. Asistidme en todo momento y ante todo en la hora de mi muerte. Amén.
			</Col>
            </Col>
			</Row>
			</Container>
		) : ''}
		
		{m === 2 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'>Febrero La Sagrada Familia</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center pb-4">
			
			
            <Col size={12} md={6}>
			
			<img className='imagen' src='https://images.pexels.com/photos/6244101/pexels-photo-6244101.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Imagen" />
			
            </Col>
			
            <Col size={12} md={6}>
			
            
			<p className="animeText text-center fs-5">Sagrada Familia: preside nuestro hogar
			para que sea como el tuyo, lleno de amor y de paz</p> 
			
			<Col className="pb-5 text-justify text-light">
			Es el mes de la Sagrada Familia porque después de las celebraciones de Navidad, la Iglesia la venera.
			
			Fue en la Sagrada Familia que Jesús vivió toda su vida antes de comenzar su vida pública para la salvación de la humanidad.
			
			Ahí, él aprendió las cosas santas, trabajó con manos humanas, obedeció a sus padres y se preparó para la gran misión.
			
			Mirando la Sagrada Familia, la Iglesia desea que las parejas y los hijos aprendan a vivir según la voluntad de Dios.
			<br></br>
			“El mundo sería mucho mejor si la Navidad no fuera un día, si las madres fueran María y los padres fueran José”.
			<br></br>
			Aunque el inicio de la Cuaresma cambie de acuerdo con el calendario civil, una buena parte de febrero nos da espacio de tiempo entre las celebraciones de Navidad y una mayor atención a la vida pública y el ministerio de Jesús, que se lleva a cabo en la Cuaresma.
			</Col>
            </Col>
			</Row>
			</Container>
		) : ''}
		
		{m === 4 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'>Eucaristía y Divino Espíritu Santo</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center pb-4">
			
			
            <Col size={12} md={6}>
			
			<img className='imagen' src='https://images.pexels.com/photos/931924/pexels-photo-931924.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Imagen" />
			
            </Col>
			
            <Col size={12} md={6}>
			<h5 className='text-justify text-light'>Divina luz, y enriquécenos.
			Mira el vacío del hombre,
			si tú le faltas por dentro;
			mira el poder del pecado,
			cuando no envías tu aliento.</h5>
            
			<p className="animeText text-center fs-5">
			Está dedicado a la Eucaristía y al Divino Espíritu Santo. 
			</p> 
			
			<Col className="pb-5 text-justify text-light">
			Está dedicado a la Eucaristía y al Divino Espíritu Santo. Casi siempre el día de Pascua cae en abril; e incluso cuando cae en marzo, el periodo pascual de 40 días continúa en abril.
			<br></br>
			La Eucaristía es el centro de la vida de la Iglesia. Ella es el sacrificio de Cristo que se actualiza (se vuelve presente) en el altar, en la celebración de la misa; y alimento (banquete) del cordero que se da como alimento espiritual.
			<br></br>
			Es la mayor prueba de amor de Jesús con nosotros. Además de la misa, Él permanece en estado de víctima ofrecida permanentemente al Padre en nuestros sagrarios, para ayudarnos en todas las necesidades y estar siempre con nosotros.
			</Col>
            </Col>
			</Row>
			</Container>
		) : ''}
		
		{m === 5 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'>Virgen María</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center pb-4">
            <Col size={12} md={6}>
			<img className='imagen' src='https://images.pexels.com/photos/9963257/pexels-photo-9963257.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Imagen" />
            </Col>
			
            <Col size={12} md={6}>
			<h5>
			Bajo tu amparo nos acogemos, Santa Madre de Dios, no desprecies nuestras súplicas en las necesidades, antes bien líbranos de todo peligro, oh Virgen gloriosa y bendita. Amén.
			</h5>
            
			<p className="animeText text-center fs-5">
			Mayo dedicado a la Virgen María
			</p> 
			
			<Col className="pb-5 text-justify text-light">
			Es el mes de la Virgen María porque está lleno de sus fiestas: 13 de mayo (Nuestra Señora de Fátima), la Visitación (31 de mayo).
			
			La devoción a la Virgen María quiere destacar su papel fundamental como mediadora de todas las gracias, intercesora permanente del pueblo de Dios, modelo para las madres cristianas, pura y santa, siempre lista y dispuesta a hacer la voluntad de Dios.
			
			Es el mes por excelencia para que las novias se casen y se consagren en sus bodas a Ella, es el mes de rezar el Rosario y su bella letanía lauretana.
			</Col>
            </Col>
			</Row>
			</Container>
		) : ''}
		
		{m === 6 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'> Sagrado Corazón de Jesús</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center pb-4">
            <Col size={12} md={6}>
			<img className='w-100 imagen' src='https://images.pexels.com/photos/5875309/pexels-photo-5875309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Imagen" />
            </Col>
			
            <Col size={12} md={6}>
			<h5 className='text-light text-center py-4'>
			“Siempre que os suceda algo penoso, aflictivo, injurioso, decíos a vosotros mismos: «Acepta lo que te manda el sagrado Corazón de Jesucristo para unirte a sí».”
			</h5>
            
			<p className="animeText text-center fs-5">
			Junio está dedicado al Sagrado Corazón de Jesús
			</p> 
			
			<Col className="pb-5 text-justify text-light">
			Es el mes del Sagrado Corazón de Jesús. Una devoción que comenzó alrededor del año 1620 cuando Jesús se la pidió a santa Margarita María Alacoque.
			
			Fue extendida en el mundo por san Claudio de La Colombiere, que era director espiritual de la santa.
			
			Era un tiempo en que había una peligrosa herejía llamada jansenismo, que impedía a los católicos comulgar con frecuencia e inculcaba miedo de Dios a la personas.
			
			La devoción al Sagrado Corazón muestra a un Jesús humano, misericordioso, listo a perdonar como el Padre al hijo pródigo; y que anima a la participación de la adoración a la Eucaristía y a recibir la comunión el primer viernes de cada mes.
			</Col>
            </Col>
			</Row>
			</Container>
		) : ''}
		
		
		{m === 7 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'>Preciosa Sangre de Nuestro Señor</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center pb-4">
            <Col size={12} md={6}>
			<img className='imagen' src='https://images.pexels.com/photos/977659/pexels-photo-977659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Imagen" />
            </Col>
			
            <Col size={12} md={6}>
			<h5>
			"Clamo a tu presencia y a tu Preciosísima Sangre, para que seas Tú quien me cubra con ella y me libre de todo mal"
			</h5>
            
			<p className="animeText text-center fs-5">
			Julio está dedicado a la Preciosa Sangre de Nuestro Señor
			</p> 
			
			<Col className="pb-5 text-justify text-light">
			Está dedicado a la Preciosa Sangre de Nuestro Señor; y la fiesta específica es el primer domingo del mes.
			
			La Sangre de Jesús es el “precio de nuestra salvación”.
			
			La piedad cristiana siempre manifestó, a través de los siglos, especial devoción a la Sangre de Cristo derramada para la remisión de los pecados de todo el género humano, y atravesando la historia hasta el día de hoy con su presencia real en el sacramento de la Eucaristía.
			
			El Papa Juan Pablo II, en su carta apostólica Angelus Domini, subrayó la invitación de Juan XXIII sobre el valor infinito de esa Sangre, de la cual “un sola gota puede salvar al mundo entero de cualquier culpa”.
			</Col>
            </Col>
			</Row>
			</Container>
		) : ''}
		
		{m === 8 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'>Inmaculado Corazón de María</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center pb-4">
            <Col size={12} md={6}>
			<img className='imagen' src='https://images.pexels.com/photos/8740647/pexels-photo-8740647.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Imagen" />
            </Col>
			
            <Col size={12} md={6}>
			<h5>
			"Clamo a tu presencia y a tu Preciosísima Sangre, para que seas Tú quien me cubra con ella y me libre de todo mal"
			</h5>
            
			<p className="animeText text-center fs-5">
			Agosto está dedicado al Inmaculado corazón de María
			</p> 
			
			<Col className="pb-5 text-justify text-light">
			Es el mes dedicado al inmaculado corazón de María. Esta devoción fue promovida por San Juan Eudes en el siglo 17.
			
			Sobre el corazón de María dijo: “Es un Corazón tan lleno de bondad, dulzura, misericordia y liberalidad que nadie ha acudido a él con humildad y confianza sin recibir sus consuelos”. 
			
			Otro santo que profesó esta devoción fue el fundador de los Misioneros del Inmaculado Corazón de María: san Antonio María Claret.
			</Col>
            </Col>
			</Row>
			</Container>
		) : ''}
		
		{m === 9 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'> Nuestra Señora y la Biblia</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center pb-4">
            <Col size={12} md={6}>
			<img className='imagen' src='https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Imagen" />
            </Col>
			
            <Col size={12} md={6}>
			<h5>
			La Sagrada Escritura es la Palabra de Dios puesta por escrito bajo la inspiración del Espíritu Santo. Al conjunto de los libros inspirados lo llamamos Biblia.
			</h5>
            
			<p className="animeText text-center fs-5">
			Septiembre dedicado a Los 7 Dolores de Nuestra Señora y la Biblia
			</p> 
			
			<Col className="pb-5 text-justify text-light">
			Los Siete Dolores de la Santísima Virgen María (fiesta de los Siete Dolores, tercer domingo de septiembre); indulgencias, trescientos días cada día y las devociones pueden realizarse en público o en privado; indulgencia plenaria cualquier día de septiembre o del 1 al 8 de octubre en las condiciones habituales (León XIII, “Raccolta”, 27 de enero de 1888, 232).

			Varios países del mundo conmemoran durante septiembre el Mes de la Biblia con el propósito de animar a las comunidades cristianas a acercarse a la Palabra de Dios.
			</Col>
            </Col>
			</Row>
			</Container>
		) : ''}
		
		{m === 10 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'>Santo Rosario</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center pb-4">
            <Col size={12} md={6}>
			<img className='imagen' src='https://images.pexels.com/photos/5121621/pexels-photo-5121621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Imagen" />
            </Col>
			
            <Col size={12} md={6}>
			<h5>
			
			</h5>
            
			<p className="animeText text-center fs-5">
			Octubre dedicado al Santo  Rosario y a las misiones
			</p> 
			
			<Col className="pb-5 text-justify text-light">
			El Santo Rosario (fiesta del Santo Rosario, primer domingo de octubre). León XIII instituyó personalmente esta práctica en una encíclica (1 de septiembre de 1883) en la que exhortaba a los fieles a dedicar el mes de octubre a la Reina del Santo Rosario para obtener por su intercesión la gracia de que Dios consuele y defienda. Su Iglesia en sus sufrimientos, y durante diecinueve años publicó una encíclica sobre este tema.

			Por decreto de la Congregación de Ritos (20 de agosto de 1885; 26 de agosto de 1886; 2 de septiembre de 1887) ordenó que todos los años durante todo el mes de octubre, incluidos el primero y el dos de noviembre, en cada catedral Iglesia parroquial y parroquial, y en todas las demás iglesias y capillas dedicadas a la Santísima Virgen María, se recitarán cinco decenas del Rosario y las Letanías de Loreto, por la mañana durante la Misa o por la tarde mientras se expone el Santísimo Sacramento, y por la carta encíclica del 15 de agosto de 1889, se añadió una oración en honor a San José.

			Indulgencias (SC Indulg., 23 de julio de 1898): (a) siete años y siete cuarentenas todos los días para la recitación pública o privada de cinco décadas; b) indulgencia plenaria en la fiesta del Santo Rosario o durante la octava para quienes durante toda la octava recen diariamente cinco décadas y cumplan las demás condiciones habituales; (c) indulgencia plenaria en cualquier otro día del mes para aquellos que, después de la octava de la fiesta, recitan al menos diez días cinco decenas(«Raccolta», 354; Albers, «Bluethenkränze», III, 730 ss.)
			</Col>
            </Col>
			</Row>
			</Container>
		) : ''}
		
		{m === 11 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'>Fieles difuntos, benditas ánimas del purgatorio</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center pb-4">
            <Col size={12} md={6}>
			<img className='imagen' src='https://images.pexels.com/photos/5121621/pexels-photo-5121621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Imagen" />
            </Col>
			
            <Col size={12} md={6}>
			<h5>
			Las Santas Almas del Purgatorio (2 de noviembre, conmemoración de todos los fieles difuntos).
			</h5>
            
			<p className="animeText text-center fs-5">
			Noviembre dedicado a los Fieles difuntos, benditas ánimas del purgatorio
			</p> 
			
			<Col className="pb-5 text-justify text-light">
			El mes de noviembre se dedica tradicionalmente a las Ánimas del Purgatorio en la tradición católica. Durante este mes, se recuerda y reza por los difuntos, especialmente aquellos que se cree que están en el Purgatorio, un estado de purificación temporal en la vida después de la muerte según la doctrina católica.
			<br></br>
			<h4 className='text-center'>ORACIÓN A SAN NICOLÁS DE TOLENTINO</h4>
			<p>
			¡Oh glorioso Taumaturgo y Protector de las almas del purgatorio, San Nicolás de Tolentino! Con todo el afecto de mi alma te ruego que interpongas tu poderosa intercesión en favor de esas almas benditas, consiguiendo de la divina clemencia la condonación de todos sus delitos y sus penas, para que saliendo de aquella tenebrosa cárcel de dolores, vayan a gozar en el cielo de la visión beatífica de Dios. Y a mi, tu devoto siervo, alcánzame, ¡oh gran santo!, la más viva compasión y la más ardiente caridad hacia aquellas almas queridas. Amén
			</p>
			</Col>
            </Col>
			</Row>
			</Container>
		) : ''}
		
		{m === 12 ? (
			<Container className='pt-5'>
			<Row>
			<Col size={12}>
            <h2 className='py-3 display-3 movLeft text-center'>Inmaculada Concepción y Navidad</h2>
			
			</Col>
			
			</Row>
			
			<Row className="align-items-center pb-4">
            <Col size={12} md={6}>
			<img className='w-100' src='https://images.pexels.com/photos/1652555/pexels-photo-1652555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Imagen" />
            </Col>
			
            <Col size={12} md={6}>
			<h5>
			
			</h5>
            
			<p className="animeText text-center fs-5">
			Diciembre dedicado a la Inmaculada Concepción y Navidad
			</p> 
			
			<Col className="pb-5 text-justify text-light">
			El mes de diciembre está dedicado a la Inmaculada Concepción de la Santísima Virgen María. «Desde toda la eternidad Dios eligió con infinita sabiduría a la mujer que sería la Madre de su divino Hijo. Para preparar al Verbo Encarnado un tabernáculo santo y sin mancha, Dios creó a María en gracia y la dotó desde el momento de su concepción con todos los perfecciones adecuadas a su exaltada dignidad. Santo Tomás enseña que a través de su intimidad con Cristo, principio de gracia, poseía más allá de todas las criaturas una plenitud de vida divina «. – Meditaciones litúrgicas, Las Hermanas de Santo Domingo
			<br></br>
			Esta fiesta nos invita a meditar sobre la virtud de la pureza. «María sola – ‘el alarde solitario de nuestra naturaleza contaminada’ – nunca vio la pureza de su alma oscurecida por el polvo de ninguna mancha, ni vio en ninguna parte de su camino triunfal hacia el cielo ningún pecado o rastro de mundanalidad. Por un único y singular privilegio de Dios fue preservada del pecado original desde el primer momento de su Inmaculada Concepción; por otro privilegio derivado del primero, el Señor no permitió que se manchara jamás ni siquiera con esos inevitables defectos de la debilidad humana» (Luis M. Martínez).
				
				</Col>
				</Col>
			</Row>
			</Container>
		) : ''}
		
		</section>
	)
}


