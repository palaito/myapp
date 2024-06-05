import {useState, useEffect} from 'react';
import Player from './Player';
import './Emisoras.css'

function Emisoras() {

  const [songs] = useState([

     {
    id: 1,
    title:"Radio María Venezuela",
    artist:"Alégrense los que buscan al Señor",
    src:"https://dreamsiteradiocp2.com/proxy/rmvenezuela?mp=/stream?ver=953010",
    img:"https://picsum.photos/100/100"
  },
  {
    id: 2,
    title:"Radio María Colombia",
    artist:"Crea en mí, ¡oh Dios!, un corazón puro.",
    src:"http://dreamsiteradiocp.com:8076/;",
     img:"https://picsum.photos/100/100"

  },
  {artistid: 3,
    title:"Vox Dei De Colombia",
    artist:"Invocaré al Señor con toda mi voz.",
    src:"http://streaming.diocesisdecucuta.com:8000/;",
     img:"https://picsum.photos/100/100"
  },
  {
    id: 4,
    title:"Radio Kerigma Católica ",
    artist:"Conserva la esperanza.",
    src:"http://elmer.primcast.com:6074/;stream.mp3/;",
     img:"https://picsum.photos/100/100"
  },
    {
    id: 5,
    title:"Natividad Venezuela",
    artist:"Sagrado Corazón de Jesús en tí confiamos.",
    src:"https://server6.globalhostla.com:9222/stream",
     img:"https://picsum.photos/100/100"
  },

   {
    id: 6,
    title:"Radio Cristiana Católica Fe y Caridad",
    artist:"Para Dios no hay nada imposible",
    src:"https://cast2.asurahosting.com:2199/proxy/allen/stream/",
    img:"https://picsum.photos/100/100"
  },
   {
    id: 7,
    title:"Radio Betania La luz ",
    artist:" Cada uno de nosotros necesita del perdón.",
    src:"https://emiteradio.com/proxy/radiobetania?mp=/stream",
    img:"https://picsum.photos/100/100"
  },
   {
    id: 8,
    title:"Católica Radio ",
    artist:"El camino de Dios es perfecto.",
    src:"https://live.turadio.stream:7017/catolicaradiopr",
    img:"https://picsum.photos/100/100"
  },
   {
    id: 9,
    title:"Radio Católica Internacional",
    artist:"La oración es poderosa.",
    src:"https://radiocatolicaint.radioca.st/;",
     img:"https://picsum.photos/100/100"
  },
   {
    id: 10,
    title:"Radio Sepa Mexico",
    artist:"Jesús manso y humilde de corazón.",
    src:"http://stream1.305stream.com:8000/stream?type=http&nocache=1687",
     img:"https://picsum.photos/100/100"
  },
   {
    id: 11,
    title:"Radio Comunidad de Fe",
    artist:"Él camina sobre el agua.",
    src:"https://usa6.fastcast4u.com/proxy/comude01?mp=/stream",
     img:"https://picsum.photos/100/100"
  }
   ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
     
    </div>
  );
}

export default Emisoras;

