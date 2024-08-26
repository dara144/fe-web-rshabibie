import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan34 from '@modules/diklat/component/Angkatan34'

export default function Angkatan34Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan34 />
    </>
  )
}
Angkatan34Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
