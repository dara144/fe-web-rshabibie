import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan42 from '@modules/diklat/component/Angkatan42'

export default function Angkatan42Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan42 />
    </>
  )
}
Angkatan42Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
