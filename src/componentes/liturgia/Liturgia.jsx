export function Liturgia (){
    let urlVideo = "https://www.youtube.com/embed/videoseries?list=UUFZ6LUMjIqNxu4fBUqTl9FA";
    return(
        <div>
       <div className="pt-lg-5 pb-5">
		<h2 className="text-center display-5">Liturgias de las Horas</h2>
         <h6 className="text-center pb-3 text-uppercase text-muted container">"(Jesús) les decía una parábola para inculcarles que era preciso orar siempre sin desfallecer" (Lucas 18,1)</h6>
    <div className="">
		<div className="container">
		<div className=' mb-2 text-center '>
     <p className='fw-bold'>{new Date().getDate()}-{new Date().getMonth()+1}-{new Date().getFullYear()}</p>
      <h4 className="text-uppercase fs-4 text-center">
        Laudes y Vísperas
      </h4>
      <h3 className='text-center'>La Iglesia invita a TODOS a rezar la Liturgia de las Horas.</h3>
     	<p className="text-justify">
     		 ¿Sabías que......Orar el Laudes te toma menos de 15 minutos?
<br></br>

Al Orar el Laudes estás, todos los días, leyendo textos de la Biblia? Es un modo sencillo de acercarse a la Palabra de Dios.

<br></br>

Cuando Oras con el Laudes, reflexionas sobre la Palabra de Dios, y cantas los Salmos, junto con el Rey David, y alabas a Dios?

<br></br>

E Laudes, Oración de la Mañana, pertenece a la Liturgia de las Horas, que son oraciones que nos permiten tener a Dios, nuestro Señor, siempre presente en nuestro corazón a lo largo de toda la jornada, en las diferentes horas del día?

<br></br>

Cuando oramos con el Laudes, y las demás oraciones de la Liturgia de las Horas, lo hacemos de manera breve, pero sustanciosa, y así podemos mantener un equilibrio espiritual ante las continuas distracciones que el Mundo nos presenta a lo largo del día?

<br></br>
<strong>
  ¡Haz la prueba y verás qué bueno es el Señor!
</strong>





     	</p>
     </div>
   </div>
 </div>


   <div className="d-flex justify-content-center container pt-5">

 <div className="ratio ratio-16x9 rounded-5">
   <iframe  src={ urlVideo} title='video' className='rounded-5'>
    </iframe>
</div>
 </div>
  </div>
  </div>

    )
}