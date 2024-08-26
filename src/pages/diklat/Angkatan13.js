import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan13 from '@modules/diklat/component/Angkatan13'

export default function Angkatan13Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan13 />
    </>
  )
}
Angkatan13Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
