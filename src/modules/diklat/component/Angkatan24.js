import { Grid, ScrollArea, Text } from '@mantine/core';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import style from '../assets/PesertaDiklat.module.css'
import Border from '@component/border'
import Link from './Link'
export default function Angkatan24() {
  const data = [
    {
      "name": "Dokter P. Dalam",
      "Hasil": 8
    },
    {
      "name": "Dokter Umum",
      "Hasil": 7
    },
    {
      "name": "Perawat",
      "Hasil": 38
    },
    {
      "name": "Teknisi",
      "Hasil": 2
    }
  ]
  return (
    <>
      <Text className={style.h1}
      >Diklat RS Khusus Ginjal Ny. R.A. Habibie</Text>
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
            <label className='text-3xl font-bold'>Jumlah Peserta Lulusan Pelatihan Dialisis
              <br />
              <b className='text-[#1E90FF]'>RS Khusus Ginjal Ny R.A. Habibie </b>
            </label>
            <label className='text-3xl font-bold'>
              Angkatan XXIV (8 Oktober - 7 Januari 2015)
            </label>

            <br />
            <br />

            <ResponsiveContainer width="65%" height="35%">
              <BarChart
                width={500}
                height={300}
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
                  return `${tick}`
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