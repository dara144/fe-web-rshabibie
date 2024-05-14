import { Grid, ScrollArea, Text } from '@mantine/core';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import style from '../assets/PesertaDiklat.module.css'
import Border from '@component/border'
import capd from '../assets/image/AngkatanCAPD.png'
import Image from 'next/future/image';
export default function AngkatanCAPD() {
  return (
    <>
      <Text className={style.h1}
      >Diklat RS Khusus Ginjal Ny. R.A. Habibie</Text>
      <main className={style.wrapper}>
        <Border />
        <label className='text-3xl font-bold'>Data Pelatihan Continuos Ambulatory Dialysis (CAPD)
          <br />
          <b className='text-[#1E90FF]'>RS Khusus Ginjal Ny R.A. Habibie </b>
        </label>
        <Image
          src={capd}
          blurDataURL={capd}
          alt='Angkatan CAPD'
          priority />
        <br />
        <br />
      </main>
    </>
  )
}