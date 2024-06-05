import React, { useState, useEffect} from 'react'

function Misa() {
  const [isLoading, setIsLoading] = useState(true);
   const [imageUrl, setImageUrl] = useState(null);
 
  useEffect(() => {
    setImageUrl('https://www.youtube.com/embed/videoseries?list=PLbox36Xu6HrorOH1yqOD485HSk7pnSs0Y');
    setIsLoading(false);
  }, []);


  return (
   
      <div className="py-5 ">
    <div className="container">
 <div className="row ">

    <div className="col-lg-6 col-md-6 col-sm-12 m-auto p-auto text-center">
<h2 className=" display-6">La Santa Misa</h2>
<p className='fw-bold'>{new Date().getDate()}-{new Date().getMonth()+1}-{new Date().getFullYear()}</p>
<h4 className="text-secondary">Santa Misa Cosmovision <br/>Sagrados Corazones de Jesús y de María 
en Voz confío</h4>
    </div>
   
      <div className="col-lg-6 col-md-12 col-sm-12 p-0">
        <div className="d-flex justify-content-center ">
         {isLoading ? <h1 className='text-warning'>Cargando....</h1> :
 <div className="ratio ratio-16x9 rounded-5">
    <iframe  src={imageUrl} title='video' className='rounded-5'>
    </iframe>
             {/* UULFuWbG1NbLpwFaB5Z2UAx9Cw */}
</div>
}
</div>
    </div>
</div>
</div>
</div>
 
  )
}

export default Misa