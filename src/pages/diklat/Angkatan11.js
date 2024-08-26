import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan11 from '@modules/diklat/component/Angkatan11'

export default function Angkatan11Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan11 />
    </>
  )
}
Angkatan11Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
