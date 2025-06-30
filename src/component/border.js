import Image from 'next/image'
import style from '@styles/border.module.css'
import Line from '/public/border.png'

export default function Border() {
  return (
    <main className={style.wrapper}>
      <div
        style={{
          width: '100%'
        }}>
        <div className='grid grid-cols-4'>
          <Image src={Line} alt='border' />
          <Image src={Line} alt='border' />
          <Image src={Line} alt='border' />
          <Image src={Line} alt='border' />
        </div>
      </div>
    </main>
  )
}
