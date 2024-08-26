import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan14 from '@modules/diklat/component/Angkatan14'

export default function Angkatan14Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan14 />
    </>
  )
}
Angkatan14Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
