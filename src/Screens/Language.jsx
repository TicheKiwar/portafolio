
import style from './Language.module.css'

export function Language({type, name}) {
  return (
    <article>
        <img className={style.cardI}
            alt={`imagen de ${name}`}
            src={`/src/image/${type}/${name}.png`}
            />
    </article>
  )
}