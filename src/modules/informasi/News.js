import style from './assets/News.module.css'
import NewsLarge from './component/newsLarge'
import NewsSmall from './component/newsSmall'

export default function CardSection() {
  return (
    <>
      <main className={style.wrapper}>
        <div className={style.large}>
          <NewsLarge />
        </div>
        <div className={style.small}>
          <NewsSmall />
        </div>
      </main>
    </>
  )
}
