/* eslint-disable @next/next/no-img-element */
import style from '../assets/CarouselPelatihanCAPD.module.css'
import Image from 'next/future/image'
import hd1 from '../assets/image/hd1.avif'
import hd2 from '../assets/image/hd2.avif'
import hd3 from '../assets/image/hd3.avif'
import hd4 from '../assets/image/hd4.avif'
import { Carousel } from '@mantine/carousel'
export default function CarouselPelatihanHD() {
  return (
    <Carousel className={style.carousel} slideSize="70%" slideGap="md" loop >
      <Carousel.Slide>
        <Image className={style.image}
          src={hd1}
          weight={300}
          blurDataURL={hd1}
          alt="Kegiatan Latihan hd Angkatan ke-3"
          priority
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image className={style.image}
          src={hd2}
          weight={300}
          blurDataURL={hd2}
          alt="Kegiatan Latihan hd Angkatan ke-3"
          priority
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image className={style.image}
          src={hd3}
          weight={300}
          blurDataURL={hd3}
          alt="Kegiatan Latihan hd Angkatan ke-3"
          priority
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image className={style.image}
          src={hd4}
          weight={300}
          blurDataURL={hd4}
          alt="Kegiatan Latihan hd Angkatan ke-3"
          priority
        />
      </Carousel.Slide>
    </Carousel >
  )
}
