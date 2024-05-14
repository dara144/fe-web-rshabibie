import { Grid, ScrollArea, Text } from '@mantine/core';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
export default function LaporHasilKritisLab() {
  const data = [
    {
      "name": "Juli",
      "Target": 100,
      "Hasil": 100
    },
    {
      "name": "Agustus",
      "Target": 100,
      "Hasil": 100
    },
    {
      "name": "September",
      "Target": 100
    }
  ]
  const value = [
    {
      "name": "1",
      "Target": 100,
      "Hasil": 100
    },
    {
      "name": "2",
      "Target": 100,
      "Hasil": 100
    },
    {
      "name": "3",
      "Target": 100,
      "Hasil": 100

    },
    {
      "name": "4",
      "Target": 100,
      "Hasil": 100
    },
    {
      "name": "5",
      "Target": 100,
      "Hasil": 100
    },
    {
      "name": "6",
      "Target": 100,
      "Hasil": 100
    },
    {
      "name": "7",
      "Target": 100,
      "Hasil": 100
    },
    {
      "name": "8",
      "Target": 100,
      "Hasil": 100
    },
    {
      "name": "9",
      "Target": 100,
      "Hasil": 100
    },
    {
      "name": "10",
      "Target": 100,
      "Hasil": 100
    },
    {
      "name": "11",
      "Target": 100
    },
    {
      "name": "12",
      "Target": 100
    },
    {
      "name": "13",
      "Target": 100
    },
    {
      "name": "14",
      "Target": 100
    },
    {
      "name": "15",
      "Target": 100
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
            <label className='text-3xl font-bold'>Laporan <b className='text-[#1E90FF]'>Hasil Kritis Laboratorium</b>
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
            <br />
            <br />
            <br />

            <label className='text-3xl font-bold'>Laporan <b className='text-[#1E90FF]'>Hasil Kritis Laboratorium</b>
            </label>
            <br />
            <label className='text-3xl font-bold'>
              Juli-September 2022
            </label>

            <br />
            <br />

            <ResponsiveContainer width="75%" height="35%">
              <BarChart
                width={730}
                height={350}
                data={value}
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

            {/* <BarChart width={730} height={250} data={value}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Target" fill="#53A8FB" />
              <Bar dataKey="Hasil" fill="#82ca9d" />
            </BarChart> */}
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}