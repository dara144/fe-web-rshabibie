import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan41 from '@modules/diklat/component/Angkatan41'

export default function Angkatan41Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan41 />
    </>
  )
}
Angkatan41Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
