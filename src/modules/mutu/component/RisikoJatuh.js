import { Grid, ScrollArea, Text } from '@mantine/core';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
export default function RisikoJatuh() {
  const data = [
    {
      "name": "Bedah",
      "Juli": 92.54,
      "Agustus": 93.75
    },
    {
      "name": "Ranap Inap",
      "Juli": 100,
      "Agustus": 97.85
    },
    {
      "name": "HD",
      "Juli": 100,
      "Agustus": 100
    },
    {
      "name": "IGD",
      "Juli": 98.51,
      "Agustus": 96.24
    },
    {
      "name": "Rawat Jalan",
      "Juli": 89.20,
      "Agustus": 91.01
    },
    {
      "name": "LAB",
      "Juli": 100,
      "Agustus": 100
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
            <label className='text-3xl font-bold'>Kepatuhan <b className='text-[#1E90FF]'>Upaya Pencegahan Risiko Pasien Jatuh</b>
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
                <Bar dataKey="Juli" fill="#53A8FB" />
                <Bar dataKey="Agustus" fill="#82ca9d" />
                <Bar dataKey="September" fill="#F8A446" />
              </BarChart>
            </ResponsiveContainer>

            {/* <BarChart width={730} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Juli" fill="#53A8FB" />
              <Bar dataKey="Agustus" fill="#82ca9d" />
              <Bar dataKey="September" fill="#F8A446" />
            </BarChart> */}
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}