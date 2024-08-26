import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan6 from '@modules/diklat/component/Angkatan6'

export default function Angkatan6Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan6 />
    </>
  )
}
Angkatan6Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
