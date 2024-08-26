import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import Image from 'next/image';
import imgIdentifikasiPasien from '/public/IdentifikasiPasien.jpg'
import imgIdentifikasiPasien2 from '/public/IdentifikasiPasien2.jpg'
export default function IdentifikasiPasien() {
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
              src={imgIdentifikasiPasien}
              blurDataURL={imgIdentifikasiPasien}
              alt='Kepatuhan Identifikasi Pasien' />
            <br />
            <br />
            <Image
              src={imgIdentifikasiPasien2}
              blurDataURL={imgIdentifikasiPasien2}
              alt='Kepatuhan Identifikasi Pasien' />
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}