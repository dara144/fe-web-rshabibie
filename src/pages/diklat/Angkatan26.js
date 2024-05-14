import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan26 from '@modules/diklat/component/Angkatan26'

export default function Angkatan26Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan26 />
    </>
  )
}
Angkatan26Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
