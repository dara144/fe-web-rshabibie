import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan23 from '@modules/diklat/component/Angkatan23'

export default function Angkatan23Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan23 />
    </>
  )
}
Angkatan23Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
