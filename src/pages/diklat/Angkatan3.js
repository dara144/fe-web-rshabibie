import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan3 from '@modules/diklat/component/Angkatan3'

export default function Angkatan3Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan3 />
    </>
  )
}
Angkatan3Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
