/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import style from '@styles/Swiper.module.css'
import { useRef } from 'react'
export default function Carousel() {
  const swiperPrev = useRef(null)
  const swiperNext = useRef(null)
  return (
    <Swiper
      modules={[EffectFade, Navigation, Pagination]}
      navigation={{
        prevEl: swiperPrev.current,
        nextEl: swiperNext.current
      }}
      pagination={{ clickable: true }}
      effect='fade'
      speed={1000}
      slidesPerView={1}
      loop
      className={style.myswiper}
      onInit={swiper => {
        swiper.params.navigation.prevEl = swiperPrev.current
        swiper.params.navigation.nextEl = swiperNext.current
        swiper.navigation.init()
        swiper.navigation.update()
        // swiper.pagination.init()
        // swiper.pagination.update()
      }}>
      <SwiperSlide className={style.swiperslide}>
        <img src='https://source.unsplash.com/random/900x500?sig=1' alt='image' />
      </SwiperSlide>
      <SwiperSlide className={style.swiperslide}>
        <img src='https://source.unsplash.com/random/900x500?sig=2' alt='image' />
      </SwiperSlide>
      <SwiperSlide className={style.swiperslide}>
        <img src='https://source.unsplash.com/random/900x500?sig=3' alt='image' />
      </SwiperSlide>
      <div className={style.swiperPrev} ref={swiperPrev}>
        prev
      </div>
      <div className={style.swiperNext} ref={swiperNext}>
        next
      </div>
    </Swiper>
  )
}
