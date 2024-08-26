import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import imgPatuhCP from '/public/PatuhCP.jpg'
import imgPatuhCP2 from '/public/PatuhCP2.png'
import Image from 'next/image';
export default function PatuhCP() {
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
              src={imgPatuhCP}
              blurDataURL={imgPatuhCP}
              alt='Kepatuhan Terhadap Alur Klinis' />
            <br />
            <br />
            <Image
              src={imgPatuhCP2}
              blurDataURL={imgPatuhCP2}
              alt='Kepatuhan Terhadap Alur Klinis' />
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}