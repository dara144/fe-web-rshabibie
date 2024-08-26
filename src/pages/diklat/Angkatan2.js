import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan2 from '@modules/diklat/component/Angkatan2'

export default function Angkatan2Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan2 />
    </>
  )
}
Angkatan2Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
