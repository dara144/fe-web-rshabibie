import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import Image from 'next/image';
import imgWaktuTungguRajal from '/public/WaktuTungguRajal.jpg'
import imgWaktuTungguRajal2 from '/public/WaktuTungguRajal2.jpg'
export default function WaktuTungguRajal() {
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
              src={imgWaktuTungguRajal}
              blurDataURL={imgWaktuTungguRajal}
              alt='Waktu Tunggu Rawat Jalan' />
            <br />
            <br />
            <Image
              src={imgWaktuTungguRajal2}
              blurDataURL={imgWaktuTungguRajal2}
              alt='Waktu Tunggu Rawat Jalan' />
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}