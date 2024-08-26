import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import imgKepuasanPasien from '/public/KepuasanPasien.png'
import imgKepuasanPasien2 from '/public/KepuasanPasien2.png'
import Image from 'next/image';
export default function KepuasanPasien() {
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
              src={imgKepuasanPasien}
              blurDataURL={imgKepuasanPasien}
              alt='Kepuasan Pasien' />
            <br />
            <br />
            <Image
              src={imgKepuasanPasien2}
              blurDataURL={imgKepuasanPasien2}
              alt='Kepuasan Pasien' />
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}