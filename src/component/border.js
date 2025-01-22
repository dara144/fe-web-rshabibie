import Image from 'next/image'
import style from '@styles/border.module.css'
import border from '/public/border.png'

export default function Border() {
  return (
    <main className={style.wrapper}>
      <div
        style={{
          width: '100%'
        }}>
        <div className='grid grid-cols-4'>
          <Image src={border} alt='border' />
          <Image src={border} alt='border' />
          <Image src={border} alt='border' />
          <Image src={border} alt='border' />
        </div>
      </div>
    </main>
  )
}
