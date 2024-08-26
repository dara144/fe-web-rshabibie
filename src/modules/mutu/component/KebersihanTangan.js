import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import Image from 'next/image';
import imgKebersihanTangan from '/public/KebersihanTangan.jpg'
import imgKebersihanTangan2 from '/public/KebersihanTangan2.jpg'
export default function KebersihanTangan() {
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
              src={imgKebersihanTangan}
              blurDataURL={imgKebersihanTangan}
              alt='Kepatuhan Kebersihan Tangan' />
            <br />
            <br />
            <Image
              src={imgKebersihanTangan2}
              blurDataURL={imgKebersihanTangan2}
              alt='Kepatuhan Kebersihan Tangan' />
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}