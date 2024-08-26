import { Grid, ScrollArea, Text } from '@mantine/core';
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
import imgWaktuTanggapKomplain from '/public/WaktuTanggapKomplain.png'
import imgWaktuTanggapKomplain2 from '/public/WaktuTanggapKomplain2.png'
import Image from 'next/image';
export default function WaktuTanggapKomplain() {
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
              src={imgWaktuTanggapKomplain}
              blurDataURL={imgWaktuTanggapKomplain}
              alt='Kecepatan Waktu Tanggap Komplain' />
            <br />
            <br />
            <Image
              src={imgWaktuTanggapKomplain2}
              blurDataURL={imgWaktuTanggapKomplain2}
              alt='Kecepatan Waktu Tanggap Komplain' />
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}