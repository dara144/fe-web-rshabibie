import Carousel from './component/Carousel'
import style from './assets/index.module.css'
import 'animate.css/animate.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Title } from '@mantine/core'
import CardSection from '@modules/informasi/component/card'
import News from '@modules/informasi/News'
import { useInView } from 'react-intersection-observer'
import Registrasi from '@modules/home/component/Registrasi'

export default function Home() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  const { ref: myRef2, inView: myImageIsVisible2 } = useInView()
  return (
    <>
      <div className={style.container}>
        <Carousel />
        <div className='mx-auto'>
          <Title className={style.h1}>Fasilitas Dan Layanan <i className='text-[#1E90FF]'>RSKG Ny. R.A Habibie</i></Title>
          <div ref={myRef1} className={`${myImageIsVisible1 ? style.animateShowImage : style.animateHiddenImage}`}>
            <CardSection />
          </div>

          <Title className={style.h1}>Artikel Dan Informasi <i className='text-[#1E90FF]'>RSKG Ny. R.A Habibie</i></Title>
          <div ref={myRef2} className={`${myImageIsVisible2 ? style.animateShowImage : style.animateHiddenImage}`}>
            <News />
          </div>
        </div>
      </div>
    </>
  )
}
