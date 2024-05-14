import ActiveLink from '@component/ActiveLink';
import { Card, Grid } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { BiSearch } from "react-icons/bi";
import Image from 'next/image';
import FHD from '../assets/image/FHD.avif'
import FRajal from '../assets/image/FRawatJalan.avif'
import FRanap from '../assets/image/FRawatInap.avif'
import FIGD from '../assets/image/FIGD.avif'
import FBedah from '../assets/image/FBedah.avif'
import FCAPD from '../assets/image/FCAPD.avif'
import FRadiologi from '../assets/image/FRadiologi2.avif'
import FLAB from '../assets/image/FLaboratorium.avif'
import FFarmasi from '../assets/image/FFarmasi.avif'
import FMCU from '../assets/image/mcu.jpg'
import style from '../assets/Fasilitas.module.css'

export default function CardLarge() {
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
  return (
    <>
      <main className={style.wrapper}>
        <Grid className={style.grid}>
          <Grid.Col sm={12} md={4} lg={2.2} xl={2}>
            <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/HD'>
              <a ref={ref} className='relative block group transition ease-in-out hover:scale-105'>
                <Image className={style.imgCard}
                  src={FHD}
                  width={400}
                  height={260}
                  priority
                  alt="HD"
                />
                {hovered && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' />}
              </a>
            </ActiveLink>
            <label className={style.p}>Hemodialisis (HD)</label>
          </Grid.Col>
                
          <Grid.Col sm={12} md={4} lg={2.2} xl={2}>
            <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/RawatJalan'>
              <a ref={ref1} className='relative block group transition ease-in-out hover:scale-110'>
                <Image className={style.imgCard}
                  src={FRajal}
                  width={400}
                  height={260}
                  priority
                  alt="Rawat Jalan"
                />
                {hovered1 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' />}
              </a>
            </ActiveLink>
            <label className={style.p}>Rawat Jalan</label>
          </Grid.Col>

          <Grid.Col sm={12} md={4} lg={2.2} xl={2}>
            <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/RawatInap'>
              <a ref={ref2} className='relative block group transition ease-in-out hover:scale-105'>
                <Image className={style.imgCard}
                  src={FRanap}
                  width={400}
                  height={260}
                  priority
                  alt="Rawat Inap"
                />
                {hovered2 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' />}
              </a>
            </ActiveLink>
            <label className={style.p}>Rawat Inap</label>
          </Grid.Col>

          <Grid.Col sm={12} md={4} lg={2.2} xl={2}>
            <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/IGD'>
              <a ref={ref3} className='relative block group transition ease-in-out hover:scale-105'>
                <Image className={style.imgCard}
                  src={FIGD}
                  width={400}
                  height={260}
                  priority
                  alt="Rawat Darurat"
                />
                {hovered3 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' />}
              </a>
            </ActiveLink>
            <label className={style.p}>Instalasi Gawat Darurat (IGD)</label>
          </Grid.Col>

          <Grid.Col sm={12} md={4} lg={2.2} xl={2}>
            <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/PelayananBedah'>
              <a ref={ref4} className='relative block group transition ease-in-out hover:scale-105'>
                <Image className={style.imgCard}
                  src={FBedah}
                  width={400}
                  height={260}
                  priority
                  alt="Pelayanan Bedah"
                />
                {hovered4 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' />}
              </a>
            </ActiveLink>
            <label className={style.p}>Pelayanan Bedah</label>
          </Grid.Col>

          <Grid.Col sm={12} md={4} lg={2.2} xl={2}>
            <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/CAPD'>
              <a ref={ref5} className='relative block group transition ease-in-out hover:scale-105'>
                <Image className={style.imgCard}
                  src={FCAPD}
                  width={400}
                  height={260}
                  priority
                  alt="CAPD"
                />
                {hovered5 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' />}
              </a>
            </ActiveLink>
            <label className={style.p}>CAPD</label>
          </Grid.Col>

          <Grid.Col sm={12} md={4} lg={2.2} xl={2}>
            <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/Radiologi'>
              <a ref={ref6} className='relative block group transition ease-in-out hover:scale-105'>
                <Image className={style.imgCard}
                  src={FRadiologi}
                  width={400}
                  height={260}
                  priority
                  alt="Radiologi"
                />
                {hovered6 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' />}
              </a>
            </ActiveLink>
            <label className={style.p}>Radiologi</label>
          </Grid.Col>

          <Grid.Col sm={12} md={4} lg={2.2} xl={2}>
            <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/Laboratorium'>
              <a ref={ref7} className='relative block group transition ease-in-out hover:scale-105'>
                <Image className={style.imgCard}
                  src={FLAB}
                  width={400}
                  height={260}
                  priority
                  alt="Laboratorium"
                />
                {hovered7 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' />}
              </a>
            </ActiveLink>
            <label className={style.p}>Laboratorium</label>
          </Grid.Col>

          <Grid.Col sm={12} md={4} lg={2.2} xl={2}>
            <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/Farmasi'>
              <a ref={ref8} className='relative block group transition ease-in-out hover:scale-105'>
                <Image className={style.imgCard}
                  src={FFarmasi}
                  width={400}
                  height={260}
                  priority
                  alt="Farmasi"
                />
                {hovered8 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' />}
              </a>
            </ActiveLink>
            <label className={style.p}>Farmasi</label>
          </Grid.Col>

          <Grid.Col sm={12} md={4} lg={2.2} xl={2}>
            <ActiveLink activeClassName={'text-[#1E90FF]'} href='/pelayanan/MCU'>
              <a ref={ref9} className='relative block group transition ease-in-out hover:scale-105'>
                <Image className={style.imgCard}
                  src={FMCU}
                  width={400}
                  height={260}
                  priority
                  alt="MCU"
                />
                {hovered9 && <BiSearch className='absolute z-10 top-1/3 left-0 right-0 mr-auto ml-auto text-5xl text-[#1E90FF]' />}
              </a>
            </ActiveLink>
            <label className={style.p}><i>Medical Check Up</i> (MCU)</label>
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}