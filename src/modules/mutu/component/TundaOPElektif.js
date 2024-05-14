import { Grid, ScrollArea, Text } from '@mantine/core';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import style from '../assets/IndikatorMutu.module.css'
import Border from '@component/border'
import Link from './Link'
export default function TundaOPElektif() {
  const data = [
    {
      "name": "Juli",
      "Target": 5,
      "Hasil": 6.94
    },
    {
      "name": "Agustus",
      "Target": 5,
      "Hasil": 16.67
    },
    {
      "name": "September",
      "Target": 5
    }
  ]
  const value = [
    {
      "name": "1",
      "Target": 5,
      "Hasil": 8.33
    },
    {
      "name": "2",
      "Target": 5,
      "Hasil": 6.11
    },
    {
      "name": "3",
      "Target": 5,
      "Hasil": 6.11

    },
    {
      "name": "4",
      "Target": 5,
      "Hasil": 7.54
    },
    {
      "name": "5",
      "Target": 5,
      "Hasil": 10
    },
    {
      "name": "6",
      "Target": 5,
      "Hasil": 11.11
    },
    {
      "name": "7",
      "Target": 5,
      "Hasil": 16.67
    },
    {
      "name": "8",
      "Target": 5,
      "Hasil": 6.67
    },
    {
      "name": "9",
      "Target": 5,
      "Hasil": 16.67
    },
    {
      "name": "10",
      "Target": 5,
      "Hasil": 44.44
    },
    {
      "name": "11",
      "Target": 5
    },
    {
      "name": "12",
      "Target": 5
    },
    {
      "name": "13",
      "Target": 5
    },
    {
      "name": "14",
      "Target": 5
    },
    {
      "name": "15",
      "Target": 5
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
            <label className='text-3xl font-bold'>Penundaan Operasi <b className='text-[#1E90FF]'>Elektif</b>
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

            <label className='text-3xl font-bold'>Penundaan Operasi <b className='text-[#1E90FF]'>Elektif</b>
            </label>
            <br />
            <label className='text-3xl font-bold'>
              Juli-September 2022
            </label>

            <br />
            <br />

            <ResponsiveContainer width="65%" height="35%">
              <LineChart
                width={500}
                height={300}
                data={value}
                margin={{
                  top: 5,
                  right: 70,
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
                <Line type="monotone" dataKey="Target" stroke="#53A8FB" />
                <Line type="monotone" dataKey="Hasil" stroke="#82ca9d" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}