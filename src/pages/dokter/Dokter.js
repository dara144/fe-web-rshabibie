import Head from 'next/head'
import Nav from '@layout/Nav'
import JadwalDokter from '@modules/dokter/Dokter'

export default function Dokter() {
  return (
    <>
      <Head>
        <title>Jadwal Dokter</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <JadwalDokter />
    </>
  )
}
Dokter.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>{page}</div>
  </Nav>
)
