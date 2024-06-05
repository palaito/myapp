import Sr from './Sr';
import Gloriosos from '../../audios/Rosario-Gloriosos.mp3'
import Dolorosos from '../../audios/Rosario-Dolorosos.mp3'
import Luminosos from '../../audios/Rosario-Luminosos.mp3'
import Gozosos from '../../audios/Rosario-Gozosos.mp3'

function SantoRosario() {

    let dS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let f = new Date().getDay();
    let d = (dS[f]);

    const misterios = () => {
        switch (d) {
            case 'Domingo':
                return 'Gloriosos'
            case 'Miércoles':
                return 'Gloriosos'
            case 'Lunes':
                return 'Gozosos'
            case 'Sábado':
                return 'Gozosos'
            case 'Martes':
                return 'Dolorosos'
            case 'Viernes':
                return 'Dolorosos'
            case 'Jueves':
                return 'Luminosos'
            default:
                break;
        }
    }

    const gloriosos = () => {
            return <Sr
            misterio = 'Misterios Gloriosos (Miércoles y Domingo)'
            contenido = {{
                uno: 'La Resurrección del Señor.',
                dos: 'La Ascensión del Señor.',
                tres: ' La Venida del Espíritu Santo.',
                cuatro: 'La Asunción de Nuestra Señora a los Cielos..',
                cinco: 'La Coronación de la Santísima Virgen.'}}
                nota = 'Un cristiano sin Rosario, es un soldado sin armas' 
                audioR = {Gloriosos}
             />
        }

       const gozosos = () => {
            return <Sr
            misterio = 'Misterios Gozosos (Lunes y Sábado)'
            contenido={{
                uno: 'La Encarnación del Hijo de Dios.',
                dos: 'a Visitación de Nuestra Señora a Santa Isabel.',
                tres: 'El Nacimiento del Hijo de Dios.',
                cuatro: 'La Presentación del Niño Jesús.',
                cinco: 'La Pérdida del Niño Jesús y su hallazgo en el templo.'}}
                nota='¡Amen a la Virgen y háganla amar. Reciten siempre el Rosario!' 
                audioR={Gozosos}
                 />
            }
       
       const dolorosos = (d) =>{
            return <Sr
                misterio='Misterios Dolorosos (Martes y Viernes)'
                contenido={{
                    uno: 'La Oración de Nuestro Señor en el Huerto.',
                    dos: 'La Flagelación del Señor.',
                    tres: 'La Coronación de espinas.',
                    cuatro: 'El Camino del Monte Calvario.',
                    cinco: 'La Crucifixión y Muerte de Nuestro Señor.'
                }}
                nota='Con esta arma le he quitado muchas almas al diablo' 
                audioR={Dolorosos}
                />
        } 

        const luminosos =()=>{
            return <Sr
            misterio='Misterios Luminosos (Jueves)'
            contenido={{
                uno: 'El Bautismo de Jesús en el Jordán.',
                dos: 'La Autorrevelación de Jesús en las bodas de Caná.',
                tres: 'El anuncio del Reino de Dios invitando a la conversión.',
                cuatro: 'La Transfiguración.',
                cinco: 'La institución de la Eucaristía.'
            }}
            nota='Ojalá quieras tú sembrar en todo el mundo la paz y la alegría' 
            audioR={Luminosos}
            />;
        }
    
        const misteriosDia = (d) => {
            switch (d) {
                case 'Domingo':
                    return gloriosos()
                case 'Miércoles':
                    return gloriosos()
                case 'Lunes':
                    return gozosos()
                case 'Sábado':
                    return gozosos()
                case 'Martes':
                    return dolorosos()
                case 'Viernes':
                    return dolorosos()
                case 'Jueves':
                    return luminosos()
                default:
                    break;
            }
        }

    return (
        <div className='pt-5'>
            <h2 className='display-3 text-center'>Rezar el Santo Rosario</h2>
            <h5 className='lead text-center'>
                "Abre, Señor, mis labios, y mi boca proclamará tu alabanza."
            </h5>

            <h4 className="text-center py-4 text-secondary fw-bold">Hoy <strong>{d}</strong> Rezamos los Misterios <strong>{misterios()}</strong></h4>

            <p className='text-justify container'>
                Rezar el rosario trae muchos beneficios y bendiciones. El Rosario es una devoción en honor a María que trae algunas promesas y bendiciones que debes conocer por el bien de tu alma y la de tu hogar y tu familia. Rezar el Rosario traerá paz, alivio y consuelo en todas tus necesidades.
        </p>
            <div className=''>
                {misteriosDia(d)}
            </div>
        </div>
    )
}
export default SantoRosario;