import { Grid, ScrollArea, Text } from '@mantine/core';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import style from '../assets/PesertaDiklat.module.css'
import Border from '@component/border'
import Link from './Link'
export default function Angkatan1() {
  const data = [
    {
      "name": "Angkatan I",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 0,
      "Perawat": 6,
      "Teknisi": 0
    },
    {
      "name": "Angkatan II",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 2,
      "Perawat": 11,
      "Teknisi": 0
    },
    {
      "name": "Angkatan III",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 0,
      "Perawat": 16,
      "Teknisi": 3
    },
    {
      "name": "Angkatan IV",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 3,
      "Perawat": 11,
      "Teknisi": 1
    },
    {
      "name": "Angkatan V",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 2,
      "Perawat": 4,
      "Teknisi": 3
    },
    {
      "name": "Angkatan VI",
      "Dokter Penyakit Dalam": 2,
      "Dokter Umum": 1,
      "Perawat": 12,
      "Teknisi": 1
    },
    {
      "name": "Angkatan VII",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 2,
      "Perawat": 20,
      "Teknisi": 3
    },
    {
      "name": "Angkatan VIII",
      "Dokter Penyakit Dalam": 1,
      "Dokter Umum": 1,
      "Perawat": 16,
      "Teknisi": 1
    },
    {
      "name": "Angkatan IX",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 4,
      "Perawat": 19,
      "Teknisi": 0
    },
    {
      "name": "Angkatan X",
      "Dokter Penyakit Dalam": 2,
      "Dokter Umum": 3,
      "Perawat": 26,
      "Teknisi": 1
    },
    {
      "name": "Angkatan XI",
      "Dokter Penyakit Dalam": 5,
      "Dokter Umum": 3,
      "Perawat": 35,
      "Teknisi": 2
    },
    {
      "name": "Angkatan XII",
      "Dokter Penyakit Dalam": 4,
      "Dokter Umum": 4,
      "Perawat": 29,
      "Teknisi": 4
    },
    {
      "name": "Angkatan XIII",
      "Dokter Penyakit Dalam": 6,
      "Dokter Umum": 10,
      "Perawat": 19,
      "Teknisi": 4
    },
    {
      "name": "Angkatan XIV",
      "Dokter Penyakit Dalam": 5,
      "Dokter Umum": 7,
      "Perawat": 24,
      "Teknisi": 2
    },
    {
      "name": "Angkatan XV",
      "Dokter Penyakit Dalam": 8,
      "Dokter Umum": 7,
      "Perawat": 27,
      "Teknisi": 2
    },
    {
      "name": "Angkatan XVI",
      "Dokter Penyakit Dalam": 5,
      "Dokter Umum": 5,
      "Perawat": 31,
      "Teknisi": 2
    },
    {
      "name": "Angkatan XVII",
      "Dokter Penyakit Dalam": 9,
      "Dokter Umum": 8,
      "Perawat": 12,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XVIII",
      "Dokter Penyakit Dalam": 9,
      "Dokter Umum": 12,
      "Perawat": 31,
      "Teknisi": 4
    },
    {
      "name": "Angkatan XIX",
      "Dokter Penyakit Dalam": 11,
      "Dokter Umum": 11,
      "Perawat": 27,
      "Teknisi": 4
    },
    {
      "name": "Angkatan XX",
      "Dokter Penyakit Dalam": 13,
      "Dokter Umum": 8,
      "Perawat": 37,
      "Teknisi": 2
    },
    {
      "name": "Angkatan XXI",
      "Dokter Penyakit Dalam": 9,
      "Dokter Umum": 10,
      "Perawat": 31,
      "Teknisi": 3
    },
    {
      "name": "Angkatan XXII",
      "Dokter Penyakit Dalam": 9,
      "Dokter Umum": 8,
      "Perawat": 39,
      "Teknisi": 4
    },
    {
      "name": "Angkatan XXIII",
      "Dokter Penyakit Dalam": 11,
      "Dokter Umum": 7,
      "Perawat": 25,
      "Teknisi": 2
    },
    {
      "name": "Angkatan XXIV",
      "Dokter Penyakit Dalam": 8,
      "Dokter Umum": 7,
      "Perawat": 38,
      "Teknisi": 2
    },
    {
      "name": "Angkatan XXV",
      "Dokter Penyakit Dalam": 11,
      "Dokter Umum": 10,
      "Perawat": 33,
      "Teknisi": 5
    },
    {
      "name": "Angkatan XXVI",
      "Dokter Penyakit Dalam": 18,
      "Dokter Umum": 14,
      "Perawat": 40,
      "Teknisi": 1
    },
    {
      "name": "Angkatan XXVII",
      "Dokter Penyakit Dalam": 18,
      "Dokter Umum": 16,
      "Perawat": 33,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXVIII",
      "Dokter Penyakit Dalam": 13,
      "Dokter Umum": 10,
      "Perawat": 41,
      "Teknisi": 7
    },
    {
      "name": "Angkatan XXIX",
      "Dokter Penyakit Dalam": 10,
      "Dokter Umum": 10,
      "Perawat": 38,
      "Teknisi": 4
    },
    {
      "name": "Angkatan XXX",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 16,
      "Perawat": 44,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXI",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 13,
      "Perawat": 51,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXII",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 9,
      "Perawat": 34,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXIII",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 12,
      "Perawat": 26,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXIV",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 0,
      "Perawat": 50,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXV",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 0,
      "Perawat": 50,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXVI",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 0,
      "Perawat": 50,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXVII",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 0,
      "Perawat": 50,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXVIII",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 0,
      "Perawat": 50,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXIX",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 0,
      "Perawat": 50,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXX",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 0,
      "Perawat": 50,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXXI",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 0,
      "Perawat": 50,
      "Teknisi": 0
    },
    {
      "name": "Angkatan XXXXII",
      "Dokter Penyakit Dalam": 0,
      "Dokter Umum": 0,
      "Perawat": 50,
      "Teknisi": 0
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
            <br />
            <br />
            <ResponsiveContainer width="100%" height="70%">
              <LineChart
                width={500}
                height={300}
                data={data}
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
                  return `${tick}`
                }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Dokter Penyakit Dalam" stroke="#1E90FF" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Dokter Umum" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Perawat" stroke="#82ca9d" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Teknisi" stroke="#d3b000" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}