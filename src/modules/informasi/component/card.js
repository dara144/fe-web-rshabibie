import style from '../assets/Fasilitas.module.css'
import CardLarge from './cardLarge'
import CardSmall from './cardSmall'


export default function CardSection() {
  return (
    <>
      <main className={style.wrapper}>
        <div className={style.large}>
          <CardLarge />
        </div>
        <div className={style.small}>
          <CardSmall />
        </div>
      </main>
    </>
  )
}
