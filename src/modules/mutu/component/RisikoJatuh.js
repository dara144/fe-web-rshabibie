import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import imgRisikoJatuh from '/public/RisikoJatuh.png'
import imgRisikoJatuh2 from '/public/RisikoJatuh2.png'
import Image from 'next/image';
export default function RisikoJatuh() {
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
              src={imgRisikoJatuh}
              blurDataURL={imgRisikoJatuh}
              alt='Kepatuhan Upaya Pencegahan Risiko Pasien Jatuh' />
            <br />
            <br />
            <Image
              src={imgRisikoJatuh2}
              blurDataURL={imgRisikoJatuh2}
              alt='Kepatuhan Upaya Pencegahan Risiko Pasien Jatuh' />
          </Grid.Col>
        </Grid>
      </main >
    </>
  )
}