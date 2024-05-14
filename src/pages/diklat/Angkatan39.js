import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan39 from '@modules/diklat/component/Angkatan39'

export default function Angkatan39Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan39 />
    </>
  )
}
Angkatan39Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
