import ActiveLink from "@component/ActiveLink";
import { Carousel } from "@mantine/carousel";
import Image from 'next/image';
import FHD from '../assets/image/FHD.avif'
import FRajal from '../assets/image/FRawatJalan.avif'
import FRanap from '../assets/image/FRawatInap.avif'
import FIGD from '../assets/image/FIGD.avif'
import FBedah from '../assets/image/FBedah.avif'
import FCAPD2 from '../assets/image/FCAPD2.avif'
import FRadiologi from '../assets/image/FRadiologi2.avif'
import FLAB from '../assets/image/FLaboratorium.avif'
import FFarmasi from '../assets/image/FFarmasi.avif'
import FMCU from '../assets/image/mcu.jpg'
import { useHover } from "@mantine/hooks";
import style from '../assets/Fasilitas.module.css'
import { useInView } from "react-intersection-observer";
import { Button, Text } from "@mantine/core";

export default function CardSmall() {
  const { hovered, ref } = useHover();
  const { hovered: hovered1, ref: ref1 } = useHover();
  const { hovered: hovered2, ref: ref2 } = useHover();
  const { hovered: hovered3, ref: ref3 } = useHover();
  const { hovered: hovered4, ref: ref4 } = useHover();
  const { hovered: hovered5, ref: ref5 } = useHover();
  const { hovered: hovered6, ref: ref6 } = useHover();
  const { hovered: hovered7, ref: ref7 } = useHover();
  const { hovered: hovered8, ref: ref8 } = useHover();
  const { hovered: hovered9, ref: ref9 } = useHover();

  const { ref: myRef, inView: myImageIsVisible } = useInView()
  return (
    <main className={style.wrapper}>

      <Carousel slideSize="70%" height={230} align='start' slideGap="md" withControls={false} loop>
        <Carousel.Slide>
          <div className={style.tile}>
            <ActiveLink activeClassName={'text-primary'} href='/pelayanan/HD'>
              <a ref={ref}>
                <Image className={style.image}
                  src={FHD}
                  width={500}
                  height={400}
                  priority
                  alt="HD"
                />
                {hovered && <Button variant="subtle" className='absolute z-10 top-2/3 left-0 right-0 mr-auto ml-auto text-md text-white'>Hemodialisis (HD)</Button>}
                {/* <div>
                  <span className={style.details}>
                    Hemodialisis (HD)
                  </span>
                </div> */}
              </a>
            </ActiveLink>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={style.tile}>
            <ActiveLink activeClassName={'text-primary'} href='/pelayanan/RawatJalan'>
              <a ref={ref1}>
                <Image className={style.image}
                  src={FRajal}
                  width={500}
                  height={400}
                  loading='lazy'
                  blurDataURL={FRajal}
                  alt="Rawat Jalan"
                />
                {hovered1 && <Button variant="subtle" className='absolute z-10 top-2/3 left-0 right-0 mr-auto ml-auto text-md text-white'>Rawat Jalan</Button>}
              </a>
            </ActiveLink>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={style.tile}>
            <ActiveLink activeClassName={'text-primary'} href='/pelayanan/RawatInap'>
              <a ref={ref2}>
                <Image className={style.image}
                  src={FRanap}
                  width={500}
                  height={400}
                  loading='lazy'
                  blurDataURL={FRanap}
                  alt="Rawat Inap"
                />
                {hovered2 && <Button variant="subtle" className='absolute z-10 top-2/3 left-0 right-0 mr-auto ml-auto text-md text-white'>Rawat Inap</Button>}
              </a>
            </ActiveLink>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={style.tile}>
            <ActiveLink activeClassName={'text-primary'} href='/pelayanan/IGD'>
              <a ref={ref3} className='relative block group'>
                <Image className={style.image}
                  src={FIGD}
                  width={500}
                  height={400}
                  loading='lazy'
                  blurDataURL={FIGD}
                  alt="Rawat Darurat"
                />
                {hovered3 && <Button variant="subtle" className='absolute z-10 top-2/3 left-0 right-0 mr-auto ml-auto text-md text-white'>Instalasi Gawat Darurat (IGD)</Button>}
              </a>
            </ActiveLink>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={style.tile}>
            <ActiveLink activeClassName={'text-primary'} href='/pelayanan/PelayananBedah'>
              <a ref={ref4} className='relative block group'>
                <Image className={style.image}
                  src={FBedah}
                  width={500}
                  height={400}
                  loading='lazy'
                  blurDataURL={FBedah}
                  alt="Pelayanan Bedah"
                />
                {hovered4 && <Button variant="subtle" className='absolute z-10 top-2/3 left-0 right-0 mr-auto ml-auto text-md text-white'>Pelayanan Bedah</Button>}
              </a>
            </ActiveLink>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={style.tile}>
            <ActiveLink activeClassName={'text-primary'} href='/pelayanan/CAPD'>
              <a ref={ref5} className='relative block group'>
                <Image className={style.image}
                  src={FCAPD2}
                  width={500}
                  height={400}
                  loading='lazy'
                  blurDataURL={FCAPD2}
                  alt="CAPD"
                />
                {hovered5 && <Button variant="subtle" className='absolute z-10 top-2/3 left-0 right-0 mr-auto ml-auto text-md text-white'>CAPD</Button>}
              </a>
            </ActiveLink>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={style.tile}>
            <ActiveLink activeClassName={'text-primary'} href='/pelayanan/Radiologi'>
              <a ref={ref6} className='relative block group'>
                <Image className={style.image}
                  src={FRadiologi}
                  width={500}
                  height={400}
                  loading='lazy'
                  blurDataURL={FRadiologi}
                  alt="Radiologi"
                />
                {hovered6 && <Button variant="subtle" className='absolute z-10 top-2/3 left-0 right-0 mr-auto ml-auto text-md text-white'>Radiologi</Button>}
              </a>
            </ActiveLink>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={style.tile}>
            <ActiveLink activeClassName={'text-primary'} href='/pelayanan/Laboratorium'>
              <a ref={ref7} className='relative block group'>
                <Image className={style.image}
                  src={FLAB}
                  width={500}
                  height={400}
                  loading='lazy'
                  blurDataURL={FLAB}
                  alt="Laboratorium"
                />
                {hovered7 && <Button variant="subtle" className='absolute z-10 top-2/3 left-0 right-0 mr-auto ml-auto text-md text-white'>Laboratorium</Button>}
              </a>
            </ActiveLink>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={style.tile}>
            <ActiveLink activeClassName={'text-primary'} href='/pelayanan/Farmasi'>
              <a ref={ref8} className='relative block group'>
                <Image className={style.image}
                  src={FFarmasi}
                  width={500}
                  height={400}
                  loading='lazy'
                  blurDataURL={FFarmasi}
                  alt="Farmasi"
                />
                {hovered8 && <Button variant="subtle" className='absolute z-10 top-2/3 left-0 right-0 mr-auto ml-auto text-md text-white'>Farmasi</Button>}
              </a>
            </ActiveLink>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={style.tile}>
            <ActiveLink activeClassName={'text-primary'} href='/pelayanan/MCU'>
              <a ref={ref9} className='relative block group'>
                <Image className={style.image}
                  src={FMCU}
                  width={500}
                  height={400}
                  loading='lazy'
                  blurDataURL={FMCU}
                  alt="MCU"
                />
                {hovered9 && <Button variant="subtle" className='absolute z-10 top-2/3 left-0 right-0 mr-auto ml-auto text-md text-white'>Medical Check Up (MCU)</Button>}
              </a>
            </ActiveLink>
          </div>
        </Carousel.Slide>
      </Carousel>
    </main >
  )
}