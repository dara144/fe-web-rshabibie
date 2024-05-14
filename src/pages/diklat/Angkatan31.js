import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan31 from '@modules/diklat/component/Angkatan31'

export default function Angkatan31Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan31 />
    </>
  )
}
Angkatan31Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
