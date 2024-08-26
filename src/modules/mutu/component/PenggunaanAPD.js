import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import Image from 'next/image';
import imgPenggunaanAPD from '/public/PenggunaanAPD.jpg'
import imgPenggunaanAPD2 from '/public/PengunaanAPD2.jpg'
export default function PenggunaanAPD() {
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
              src={imgPenggunaanAPD}
              blurDataURL={imgPenggunaanAPD}
              alt='Kepatuhan Penggunaan APD' />
            <br />
            <br />
            <Image
              src={imgPenggunaanAPD2}
              blurDataURL={imgPenggunaanAPD2}
              alt='Kepatuhan Penggunaan APD' />
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}