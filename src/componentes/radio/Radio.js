import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import './Radio.css';


export default function Radio() {

  const emisoras =[
     {
    id: 1,
    nombre:"Radio María Venezuela",
    texto:"¡Gloríense en su santo Nombre,alégrense los que buscan al Señor",
    src:"https://dreamsiteradiocp2.com/proxy/rmvenezuela?mp=/stream?ver=953010",
    img:"https://media.giphy.com/media/zy92ZQ0ZAcQs7rG7vc/giphy.gif"
  },
  {
    id: 2,
    nombre:"Radio María Colombia",
    texto:"Crea en mí, ¡oh Dios!, un corazón puro.",
    src:"http://dreamsiteradiocp.com:8076/;",
    img:"https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif"

  },
  {
    id: 3,
    nombre:"Vox Dei De Colombia",
    texto:"Invocaré al Señor con toda mi voz, con toda mi voz suplicaré al Señor.",
    src:"http://streaming.diocesisdecucuta.com:8000/;",
    img:"https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif"
  },
  {
    id: 4,
    nombre:"Radio Kerigma EU",
    texto:"Conserva la esperanza, déjate sorprender por Dios y vive con alegría.",
    src:"http://elmer.primcast.com:6074/;stream.mp3/;",
    img:"https://media.giphy.com/media/xUOwG3sgHkdqoy41wY/giphy.gif"
  },
    {
    id: 5,
    nombre:"Radio Natividad",
    texto:"Sagrado Corazón de Jesús,protege nuestras familias..",
    src:"https://server6.globalhostla.com:9222/stream",
    img:"https://images.pexels.com/photos/1604849/pexels-photo-1604849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
   {
    id: 6,
    nombre:"Radio Minuto de Dios",
    texto:"Porque todo el que quiera salvar su vida, la perderá; y todo el que pierda su vida por causa de mí y del evangelio, la salvará",
    src:"https://cdn4.colombiatelecom.com.co/proxy/63300?mp=/stream",
    img:"https://images.pexels.com/photos/1533907/pexels-photo-1533907.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
   {
    id: 7,
    nombre:"Radio Maria Reina F.M",
    texto:"Para Dios no hay nada imposible y no importa cuán pecador haya sido él puede perdonarlo por completo y hacer de usted una nueva persona",
    src:"https://rs.comtic.net/proxy/",
    img:"https://images.pexels.com/photos/1652396/pexels-photo-1652396.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
   {
    id: 8,
    nombre:"Radio Betania",
    texto:" Cada uno de nosotros necesita del perdón y la redención de Dios incluyéndote a ti.",
    src:"https://emiteradio.com/proxy/radiobetania?mp=/stream",
    img:"https://images.pexels.com/photos/1782330/pexels-photo-1782330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
   {
    id: 9,
    nombre:"Radio Lumen Fidei",
    texto:"“El camino de Dios es perfecto; la promesa del Señor es digna de confianza. ¡Dios protege a todos los que en Él confían!” 2 Samuel 22:31",
    src:"https://cloudstream2034.conectarhosting.com/8090/stream",
    img:"https://cdn.pixabay.com/photo/2020/03/14/05/22/jesus-4929681_960_720.jpg"
  },
   {
    id: 10,
    nombre:"Radio Chiquinquireña",
    texto:"La oración es poderosa, pero recuerda que Dios trabaja en sus tiempos, no en los tuyos. ¡Ten paciencia!",
    src:"https://laradiossl.online:10786/live",
    img:"https://cdn.pixabay.com/photo/2017/01/03/01/08/jesus-christ-1948251_960_720.jpg"
  },
   {
    id: 11,
    nombre:"Radio Kayros",
    texto:"Jesús manso y humilde de corazón,haz mi corazón semejante al tuyo.",
    src:"http://173.44.60.154:9884/;",
    img:"https://cdn.pixabay.com/photo/2018/06/03/10/31/religion-3450127_960_720.jpg"
  },
   {
    id: 12,
    nombre:"Radio Comunidad de Fe",
    texto:"Cuando sientas que te ahogas recuerda que Él camina sobre el agua",
    src:"https://usa6.fastcast4u.com/proxy/comude01?mp=/stream",
    img:"https://cdn.pixabay.com/photo/2018/10/25/10/56/faith-3772135_960_720.jpg"
  }
  ]

// console.log(emisoras[0].valueOf.length)
// console.log(emisoras[1].img)
  return (
 <div className=''>
  <div className="text-center text-white p-4 m-0 ">
  <h1 className="display-3 pt-5">Emisoras Cátolicas</h1>
  <h2 className='text-dark'>El Señor es mi Pastor nada me faltará</h2>
  </div>
    <div className='cards-list'>
  
   {emisoras.map(emisora=>{
    return(
<div key={emisora.id}>
<div className="car-d ">
  <div className="card_image"> <img src={emisora.img} alt={emisora.nombre}/> </div>
  <div className="card_title title-white">
  <p className='emisora-texto'>{emisora.texto}</p>
    <p>{emisora.nombre}</p>
    <div>
      <AudioPlayer
      key={emisora.id}
            className="catolica"
            src={emisora.src}
            showJumpControls={false}
            />
    </div>
  </div>
</div>
    </div>
    )})}
</div>
</div>
  )
}
