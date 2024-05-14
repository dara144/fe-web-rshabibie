import { Swiper, SwiperSlide } from 'swiper/react'
import style from '@styles/Swiper.module.css'

export default function SlidePelayanan() {
  return (
    <>
      <h1 className='text-center'>Pelayanan</h1>
      <Swiper className={style.myswiper2} spaceBetween={30} slidesPerView={3} pagination={{ clickable: true }}>
        <SwiperSlide>slide 1</SwiperSlide>
        <SwiperSlide>slide 2</SwiperSlide>
        <SwiperSlide>slide 3</SwiperSlide>
        <SwiperSlide>slide 4</SwiperSlide>
        <SwiperSlide>slide 5</SwiperSlide>
      </Swiper>
    </>
  )
}
