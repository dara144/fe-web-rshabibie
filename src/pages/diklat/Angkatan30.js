import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan30 from '@modules/diklat/component/Angkatan30'

export default function Angkatan30Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan30 />
    </>
  )
}
Angkatan30Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
