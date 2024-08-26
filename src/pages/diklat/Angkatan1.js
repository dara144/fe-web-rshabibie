import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan1 from '@modules/diklat/component/Angkatan1'

export default function Angkatan1Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan1 />
    </>
  )
}
Angkatan1Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
