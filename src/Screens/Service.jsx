import style from './service.module.css'
import kiwarSvg from '../image/kiwar.svg'
import kiwarjpg from '../image/kiwar.jpeg'

const Service = () => {
  
  
  
  
  return (
    <div className={style.first}>
      <div className={style.second}>
      <div className={style.second}>
      <img className={style.image} src={kiwarjpg} alt="Kiwar Tiche" />
      </div>
      <div className={style.letterfirst}>
      <h1>
        Sobre mi
      </h1>
      <div>
      <p>
        Mi nombre es Kiwar Tiche, estudiante de la Universidad Técnica de Ambato, 
        cursando la carrera de Software
      </p>

      </div>
      </div>
      </div>
    </div>
  )
}
export default Service