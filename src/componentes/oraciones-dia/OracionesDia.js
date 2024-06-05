

export const OracionesDia = () => {

    let h = new Date().getHours();
    return (
        <div className='container'>
        
            {(() => {
                if (h >= 12 && h < 18) {
                    return (
                        <div className="col-lg-12 col-md-12 col-sm-12 pb-5">
                            <div className="card-body">
                                <div className="py-4">
                                    <h2 className="display-5"> Al medio día Rezar el Ángelus".</h2>
                                </div>
                                <h2 className="card-title fw-bold">Ángelus</h2>
                                <p className="text-justify ">
                                    V. El ángel del Señor anunció a María.
                                    <br></br>
                                    <em>R. Y concibió por obra y gracia del Espíritu Santo.</em>
                                    <br></br>
                                    Dios te salve María; llena eres de gracia, el Señor es contigo,.... Amén
                                    <br></br>
                                    V. He aquí la esclava del Señor.
                                    <br></br>
                                    <em>R. Hágase en mí según su palabra.</em>
                                    <br></br>
                                    Dios te salve María; llena eres de gracia, el Señor es contigo,... Amén
                                    <br></br>
                                    V. Y el Verbo se hizo carne.
                                    <br></br>
                                    <em>R. Y habitó entre nosotros.</em>
                                    <br></br>
                                    Dios te salve María; llena eres de gracia, el Señor es contigo,.... Amén
                                    <br></br>
                                    V. Ruega por nosotros, Santa Madre de Dios.
                                    <br></br>
                                    <em>R. Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.</em>
                                    <h3>Oremos:</h3>
                                    <p className="text-justify">
                                        Os rogamos, Señor, que infundas tu gracia en nuestras almas, para que aquellos que, por la anunciación del ángel, conocimos la Encarnación de vuestro Hijo, por su pasión y por su cruz, seamos conducidos por la gloria de la resurrección. Por el mismo Jesucristo Señor Nuestro. Amén.</p>
                                </p>
                            </div>
                        </div>
                    )
                } else if (h >= 18 && h < 24) {
                    return (
                       <div className="col-lg-12 col-md-12 col-sm-12 pb-5">
                            <div className="card-body">
                                <div className="py-4">
                                    <h2 className="display-5">Bendecida Noche</h2>
                                </div>
                                <h5 className="card-title fw-bold">Gracias Señor, por el día que termina, por la noche que llega.</h5>
                                <p className="text-justify ">
                                   Nuestro primer pensamiento del día debe ser para Dios, también debe serlo el último. No se te pase nunca por alto la oración de la noche, antes de acostarte.
                                </p>
                                    <p className="text-justify">
                                      Dios mío, Jesuscristo: Te doy gracias por todos los beneficios que has dispensado en este día. Te ofrezco mi sueño y todos los momentos de esta noche y te pido me conserves en ella sin pecado. Por esto me pongo dentro de tu santísimo Costado y bajo el manto de mi Madre, la Virgen María. Asístanme y guárdenme en paz los santos Ángeles y venga sobre mí tu Bendición. 
                                </p>
                            </div>
                        </div>
                    )
                } else if (h >= 0 && h < 12){
                    return (
                        <div className="col-lg-12 col-md-12 col-sm-12 pb-5">
                            <div className="card-body">
                                <div className="py-4">
                                    <h2 className="display-5">Dios mío en tus manos colocamos este día que comienza</h2>
                                </div>
                                <h5 className="card-title fw-bold">Gracias Señor, por el día que comienza,
                                Alabado mi Señor.</h5>
                                <p className="text-justify ">
                                   Nuestro primer pensamiento del día debe ser para Dios, también debe serlo el último. No se te pase nunca por alto la oración de la noche, antes de acostarte.
                                </p>
                                    <p className="text-justify">
                                     “Señor, en el silencio de este día que nace, vengo a pedirte paz, sabiduría y fortaleza. Hoy quiero mirar el mundo con ojos llenos de amor; ser paciente, comprensivo, humilde, suave y bueno. Ver, detrás de las apariencias, a tus hijos,
                                      como los ves tú mismo para así poder apreciar la bondad de cada uno."
                                </p>
                            </div>
                        </div>
                    )
                }
            })()}
        </div>

    );
};