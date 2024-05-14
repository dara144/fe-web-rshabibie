import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan18 from '@modules/diklat/component/Angkatan18'

export default function Angkatan18Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan18 />
    </>
  )
}
Angkatan18Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
