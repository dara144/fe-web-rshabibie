import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan35 from '@modules/diklat/component/Angkatan35'

export default function Angkatan35Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan35 />
    </>
  )
}
Angkatan35Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
