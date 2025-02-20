import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan7 from '@modules/diklat/component/Angkatan7'

export default function Angkatan7Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan7 />
    </>
  )
}
Angkatan7Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
