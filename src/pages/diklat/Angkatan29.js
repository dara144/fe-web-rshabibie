import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan29 from '@modules/diklat/component/Angkatan29'

export default function Angkatan29Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan29 />
    </>
  )
}
Angkatan29Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
