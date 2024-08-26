import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import imgLaporHasilKritisLab from '/public/LaporHasilKritisLab.jpg'
import imgLaporHasilKritisLab2 from '/public/LaporHasilKritisLab2.jpg'
import Image from 'next/image';
export default function LaporHasilKritisLab() {
  return (
    <>
      <Text className={style.h1}
      >Indikator Mutu RS Khusus Ginjal Ny. R.A Habibie</Text>
      <main className={style.wrapper}>
        <Border />
        <Grid>
          <Grid.Col md={3} lg={3}>
            <Link />
          </Grid.Col>
          <Grid.Col md={9} lg={9}>
            <Image
              src={imgLaporHasilKritisLab}
              blurDataURL={imgLaporHasilKritisLab}
              alt='Pelaporan Hasil Kritis Laboratorium' />
            <br />
            <br />
            <Image
              src={imgLaporHasilKritisLab2}
              blurDataURL={imgLaporHasilKritisLab2}
              alt='Pelaporan Hasil Kritis Laboratorium' />
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}