import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan22 from '@modules/diklat/component/Angkatan22'

export default function Angkatan22Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan22 />
    </>
  )
}
Angkatan22Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
