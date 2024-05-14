import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan33 from '@modules/diklat/component/Angkatan33'

export default function Angkatan33Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan33 />
    </>
  )
}
Angkatan33Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
