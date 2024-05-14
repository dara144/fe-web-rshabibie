/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, Pagination, Autoplay, Lazy } from 'swiper'
import style from '@styles/Swiper.module.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Box, Button, Title } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { MdKeyboardArrowRight } from 'react-icons/md'
import animate from '../helper/animate'
import { useRef } from 'react'
import Image from 'next/image'
import rskg from '../assets/image/rskg.avif'
import rskg2 from '../assets/image/rskg2.avif'
import rskg3 from '../assets/image/rskg3.avif'
import rskg4 from '../assets/image/rskg4.avif'
import ActiveLink from '@component/ActiveLink'
import { useInView } from 'react-intersection-observer'
export default function Carousel() {
  const swiperPrev = useRef(null)
  const swiperNext = useRef(null)
  const { hovered, ref } = useHover()
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  return (
    <div onMouseEnter={() => animate({ swiperPrev, swiperNext }, 'in')} onMouseLeave={() => animate({ swiperPrev, swiperNext }, 'out')}>
      <Swiper
        style={{ '--swiper-theme-color': '#fff' }}
        modules={[EffectFade, Navigation, Pagination, Lazy, Autoplay]}
        navigation={{
          prevEl: swiperPrev.current,
          nextEl: swiperNext.current
        }}
        pagination={{ clickable: true }}
        lazy={true}
        effect='fade'
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
        speed={1000}
        slidesPerView={1}
        loop
        className={style.myswiper}
        onInit={swiper => {
          swiper.params.navigation.prevEl = swiperPrev.current
          swiper.params.navigation.nextEl = swiperNext.current
          swiper.navigation.init()
          swiper.navigation.update()
          swiper.pagination.init()
          swiper.pagination.update()
        }}>
        <SwiperSlide className='bg-[#F8F8FA]'>
          <div className={style.h2}>
            <div className='max-w-4xl lg:flex lg:max-w-full'>
              <Box className='mx-auto mr-[7vw] ml-14'>
                <Title className={style.h1}>
                  Promo Dan Paket Layanan
                  <br />
                  <i className='text-[#1E90FF]'>RS. Khusus Ginjal Ny. R.A. Habibie</i>
                </Title>
                <p className={style.p}>
                  RSKG Ny. R.A. Habibie adalah Rumah Sakit yang menyediakan pelayanan hemodialisis saja, akan tetapi RSKG Ny. R.A. Habibie juga memberikan pelayanan kesehatan lain seperti, Penyakit Dalam, Gigi, dan Radiologi.
                </p>
                <ActiveLink activeClassName={'text-[#1E90FF]'} href='../promo/Promo'>
                  <a ref={ref} className='group relative block'>
                    <Button
                      className='mt-5 mb-10 rounded-xl border border-[#1E90FF] bg-[#1E90FF] px-8 outline-[#1E90FF] hover:bg-[#F5F5F5] hover:text-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-offset-2'
                      type='submit'>
                      {hovered && <MdKeyboardArrowRight className={style.btn} />}
                      Info Lebih Lanjut
                    </Button>
                  </a>
                </ActiveLink>
              </Box>
              <div ref={myRef} className={`${style.images} ${myImageIsVisible ? style.animateShowImage : style.animateHiddenImage}`}>
                <div className='pl-[20px] rounded-tl-[50vh] bg-[#1E90FF]'>
                  <Image
                    width={1500}
                    height={1500}
                    src={rskg}
                    priority
                    blurDataURL={rskg}
                    alt='RSKG NY. R.A. Habibie'
                    className='object-cover rounded-tl-[50vh] border-l-[20px] sm:hidden'
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-[#F8F8FA]'>
          <div className={style.h2}>
            <div className='max-w-4xl lg:flex lg:max-w-full'>
              <Box className='mx-auto mr-[7vw] ml-14'>
                <Title className={style.h1}>
                  Promo Dan Paket Layanan
                  <br />
                  <i className='text-[#1E90FF]'>RS. Khusus Ginjal Ny. R.A. Habibie</i>
                </Title>
                <p className={style.p}>
                  RSKG Ny. R.A. Habibie adalah Rumah Sakit yang menyediakan pelayanan hemodialisis saja, akan tetapi RSKG Ny. R.A. Habibie juga memberikan pelayanan kesehatan lain seperti, Penyakit Dalam, Gigi, dan Radiologi.
                </p>
                <ActiveLink activeClassName={'text-[#1E90FF]'} href='../promo/Promo'>
                  <a ref={ref} className='group relative block'>
                    <Button
                      className='mt-5 mb-10 rounded-xl border border-[#1E90FF] bg-[#1E90FF] px-8 outline-[#1E90FF] hover:bg-[#F5F5F5] hover:text-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-offset-2'
                      type='submit'>
                      {hovered && <MdKeyboardArrowRight className={style.btn} />}
                      Info Lebih Lanjut
                    </Button>
                  </a>
                </ActiveLink>
              </Box>
              <div ref={myRef} className={`${style.images} ${myImageIsVisible ? style.animateShowImage : style.animateHiddenImage}`}>
                <div className='pl-[20px] rounded-tl-[50vh] bg-[#1E90FF]'>
                  <Image
                    width={1500}
                    height={1500}
                    src={rskg2}
                    priority
                    blurDataURL={rskg2}
                    alt='RSKG NY. R.A. Habibie'
                    className='object-cover rounded-tl-[50vh] border-l-[20px] sm:hidden'
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-[#F8F8FA]'>
          <div className={style.h2}>
            <div className='max-w-4xl lg:flex lg:max-w-full'>
              <Box className='mx-auto mr-[7vw] ml-14'>
                <Title className={style.h1}>
                  Promo Dan Paket Layanan
                  <br />
                  <i className='text-[#1E90FF]'>RS. Khusus Ginjal Ny. R.A. Habibie</i>
                </Title>
                <p className={style.p}>
                  RSKG Ny. R.A. Habibie adalah Rumah Sakit yang menyediakan pelayanan hemodialisis saja, akan tetapi RSKG Ny. R.A. Habibie juga memberikan pelayanan kesehatan lain seperti, Penyakit Dalam, Gigi, dan Radiologi.
                </p>
                <ActiveLink activeClassName={'text-[#1E90FF]'} href='../promo/Promo'>
                  <a ref={ref} className='group relative block'>
                    <Button
                      className='mt-5 mb-10 rounded-xl border border-[#1E90FF] bg-[#1E90FF] px-8 outline-[#1E90FF] hover:bg-[#F5F5F5] hover:text-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-offset-2'
                      type='submit'>
                      {hovered && <MdKeyboardArrowRight className={style.btn} />}
                      Info Lebih Lanjut
                    </Button>
                  </a>
                </ActiveLink>
              </Box>
              <div ref={myRef} className={`${style.images} ${myImageIsVisible ? style.animateShowImage : style.animateHiddenImage}`}>
                <div className='pl-[20px] rounded-tl-[50vh] bg-[#1E90FF]'>
                  <Image
                    width={1500}
                    height={1500}
                    src={rskg3}
                    priority
                    blurDataURL={rskg3}
                    alt='RSKG NY. R.A. Habibie'
                    className='object-cover rounded-tl-[50vh] border-l-[20px] sm:hidden'
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-[#F8F8FA]'>
          <div className={style.h2}>
            <div className='max-w-4xl lg:flex lg:max-w-full'>
              <Box className='mx-auto mr-[7vw] ml-14'>
                <Title className={style.h1}>
                  Promo Dan Paket Layanan
                  <br />
                  <i className='text-[#1E90FF]'>RS. Khusus Ginjal Ny. R.A. Habibie</i>
                </Title>
                <p className={style.p}>
                  RSKG Ny. R.A. Habibie adalah Rumah Sakit yang menyediakan pelayanan hemodialisis saja, akan tetapi RSKG Ny. R.A. Habibie juga memberikan pelayanan kesehatan lain seperti, Penyakit Dalam, Gigi, dan Radiologi.
                </p>
                <ActiveLink activeClassName={'text-[#1E90FF]'} href='../promo/Promo'>
                  <a ref={ref} className='group relative block'>
                    <Button
                      className='mt-5 mb-10 rounded-xl border border-[#1E90FF] bg-[#1E90FF] px-8 outline-[#1E90FF] hover:bg-[#F5F5F5] hover:text-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-offset-2'
                      type='submit'>
                      {hovered && <MdKeyboardArrowRight className={style.btn} />}
                      Info Lebih Lanjut
                    </Button>
                  </a>
                </ActiveLink>
              </Box>
              <div ref={myRef} className={`${style.images} ${myImageIsVisible ? style.animateShowImage : style.animateHiddenImage}`}>
                <div className='pl-[20px] rounded-tl-[50vh] bg-[#1E90FF]'>
                  <Image
                    width={1500}
                    height={1500}
                    src={rskg4}
                    priority
                    blurDataURL={rskg4}
                    alt='RSKG NY. R.A. Habibie'
                    className='object-cover rounded-tl-[50vh] border-l-[20px] sm:hidden'
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image src='/rskg2.jpg' blurDataURL='/rskg2.jpg' layout='fill' alt='image' loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/rskg4.jpg' blurDataURL='/rskg4.jpg' layout='fill' alt='image' loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/rskg5.jpg' blurDataURL='/rskg5.jpg' layout='fill' alt='image' loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/rskg6.jpg' blurDataURL='/rskg6.jpg' layout='fill' alt='image' loading='lazy' />
        </SwiperSlide> */}
        <div className={style.swiperPrev} ref={swiperPrev}>
          <IoIosArrowBack />
        </div>
        <div className={style.swiperNext} ref={swiperNext}>
          <IoIosArrowForward />
        </div>
      </Swiper>
    </div>
  )
}
