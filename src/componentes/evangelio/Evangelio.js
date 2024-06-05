

export function Evangelio(){
 let date = new Date();
    let dia = ['Domingo','Lunes','Martes', 'Mièrcoles','Jueves','Viernes','Sàbado','Domingo'];
    const fecha = dia[date.getDay()] + ', ' + date.getDate() + '-' + (date.getMonth() +1) + '-' + date.getFullYear();

  let currentTime = new Date();
  let month = currentTime.getMonth() + 1;

  let year = currentTime.getFullYear();

  let day = currentTime.getDate();
  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;

  let ev = 'https://feed.evangelizo.org/v2/reader.php?date=' + year + month + day + '&type=reading&lang=SP&content=GSP';

    return(
<div className='container text-light'>
<div className='text-center pt-5'>
    <h2 className='pt-5 display-3 '>Evangelio de Hoy</h2>
    <p className='text-dark'>{fecha}</p>
    <h3 className='text-center text-dark'>
        "Un cristiano no puede vivir sin el Evangelio."
        </h3>
      <div>
     <div className='contenedor-iframe py-4 '>
  <div className="iframe-wrapper pb-4">
  <iframe title="Evangelio" className='iframe' src={ev} ></iframe>
</div>
 </div>
</div>
</div>
</div>
    );
}