/* eslint-disable @next/next/no-img-element */
import style from '../assets/CarouselPelatihanCAPD.module.css'
import Image from 'next/future/image'
import capd1 from '../assets/image/capd1.avif'
import capd2 from '../assets/image/capd2.avif'
import capd3 from '../assets/image/capd3.avif'
import capd4 from '../assets/image/capd4.avif'
import capd5 from '../assets/image/capd5.avif'
import { Carousel } from '@mantine/carousel'
export default function CarouselPelatihanCAPD() {
  return (
    <Carousel className={style.carousel} slideSize="70%" slideGap="md" loop >
      <Carousel.Slide>
        <Image className={style.image}
          src={capd1}
          weight={300}
          blurDataURL={capd1}
          alt="Kegiatan Latihan CAPD Angkatan ke-3"
          priority
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image className={style.image}
          src={capd2}
          weight={300}
          blurDataURL={capd2}
          alt="Kegiatan Latihan CAPD Angkatan ke-3"
          priority
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image className={style.image}
          src={capd3}
          weight={300}
          blurDataURL={capd3}
          alt="Kegiatan Latihan CAPD Angkatan ke-3"
          priority
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image className={style.image}
          src={capd4}
          weight={300}
          blurDataURL={capd4}
          alt="Kegiatan Latihan CAPD Angkatan ke-3"
          priority
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image className={style.image}
          src={capd5}
          weight={300}
          blurDataURL={capd5}
          alt="Kegiatan Latihan CAPD Angkatan ke-3"
          priority
        />
      </Carousel.Slide>
    </Carousel >
  )
}
