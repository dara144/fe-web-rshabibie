import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan27 from '@modules/diklat/component/Angkatan27'

export default function Angkatan27Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan27 />
    </>
  )
}
Angkatan27Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
