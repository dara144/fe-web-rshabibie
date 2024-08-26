import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan20 from '@modules/diklat/component/Angkatan20'

export default function Angkatan20Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan20 />
    </>
  )
}
Angkatan20Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
