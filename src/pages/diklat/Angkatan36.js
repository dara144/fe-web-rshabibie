import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan36 from '@modules/diklat/component/Angkatan36'

export default function Angkatan36Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan36 />
    </>
  )
}
Angkatan36Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
