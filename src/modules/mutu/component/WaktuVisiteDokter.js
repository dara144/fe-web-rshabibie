import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import imgWaktuVisiteDokter from '/public/WaktuVisiteDokter.jpg'
import imgWaktuVisiteDokter2 from '/public/WaktuVisiteDokter2.jpg'
import Image from 'next/image';
export default function WaktuVisiteDokter() {
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
              src={imgWaktuVisiteDokter}
              blurDataURL={imgWaktuVisiteDokter}
              alt='Kepatuhan Waktu Visite Dokter' />
            <br />
            <br />
            <Image
              src={imgWaktuVisiteDokter2}
              blurDataURL={imgWaktuVisiteDokter2}
              alt='Kepatuhan Waktu Visite Dokter' />
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}