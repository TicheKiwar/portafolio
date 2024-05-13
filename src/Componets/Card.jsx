import { Language } from "../Screens/Language"
import style from './Card.module.css'


const Card = () => {

    const languages=[
        {
            type:'language',
            name:'php'
        },
        {
            type:'language',
            name:'java'
        },
        {
            type:'language',
            name:'css'
        },
        {
            type:'language',
            name:'js'
        },
        {
            type:'language',
            name:'go'
        },
        {
            type:'language',
            name:'html'
        },
        {
            type:'Framework',
            name:'react'
        },
        {
            type:'Framework',
            name:'nest'
        },
        {
            type:'Framework',
            name:'laravel'
        },
        
    ];

  return (
    <section className={style.card}>
      <div className={style.header}>
        <h2>Conocimientos</h2>
      </div>
      <div className={style.languages}>
        {languages.map(({ type, name }, index) => (
            <div className={style.header}>
                <Language key={`${type}-${name}-${index}`} type={type} name={name} />
                <h3>{name}</h3>
            </div>
        ))}
      </div>
    </section>
  )
}
export default Card