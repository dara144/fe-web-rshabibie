import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import imgPatuhFornas from '/public/PatuhFornas.jpg'
import imgPatuhFornas2 from '/public/PatuhFornas2.jpg'
import Image from 'next/image';
export default function PatuhFornas() {
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
              src={imgPatuhFornas}
              blurDataURL={imgPatuhFornas}
              alt='Kepatuhan Penggunaan Formularium Nasional' />
            <br />
            <br />
            <Image
              src={imgPatuhFornas2}
              blurDataURL={imgPatuhFornas2}
              alt='Kepatuhan Penggunaan Formularium Nasional' />
          </Grid.Col>
        </Grid>
      </main >
    </>
  )
}