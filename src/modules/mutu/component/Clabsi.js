import { Grid, ScrollArea, Text } from '@mantine/core';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
export default function Clabsi() {
  const data = [
    {
      "name": "Juli",
      "Target": 0,
      "Hasil": 29
    },
    {
      "name": "Agustus",
      "Target": 0,
      "Hasil": 29.40
    },
    {
      "name": "September",
      "Target": 0,
      "Hasil": 38.20
    }
  ]
  return (
    <>
      <Text className={style.h1}
      >Indikator Mutu RS Khusus Ginjal Ny. R.A Habibie</Text>
      <main className={style.wrapper}>
        <Border />
        <Grid>
          <Grid.Col md={3} lg={3}>
            <ScrollArea style={{
              height: '100vh',
              overflow: 'clip',
              marginTop: '1.25rem'
            }}
              type="always"
            >
              <Link />
            </ScrollArea>
          </Grid.Col>
          <Grid.Col md={9} lg={9}>
            <label className='text-3xl font-bold'>Data Surveilens Infeksi <b className='text-[#1E90FF]'>Angka Kejadian CLABSI ( <i>Central Line Bloodstream Infection</i> )</b>
            </label>
            <br />
            <label className='text-3xl font-bold'>
              Juli-September 2022
            </label>

            <br />
            <br />

            <ResponsiveContainer width="65%" height="35%">
              <BarChart
                width={730}
                height={250}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(tick) => {
                  return `${tick}%`
                }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Target" fill="#53A8FB" />
                <Bar dataKey="Hasil" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}