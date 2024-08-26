import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import imgTundaOPElektif from '/public/TundaOPElektif.jpg'
import imgTundaOPElektif2 from '/public/TundaOPElektif2.jpg'
import Image from 'next/image';
export default function TundaOPElektif() {
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
              src={imgTundaOPElektif}
              blurDataURL={imgTundaOPElektif}
              alt='Penundaan operasi Elektif' />
            <br />
            <br />
            <Image
              src={imgTundaOPElektif2}
              blurDataURL={imgTundaOPElektif2}
              alt='Penundaan operasi Elektif' />
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}