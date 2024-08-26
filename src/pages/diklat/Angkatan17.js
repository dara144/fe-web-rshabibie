import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan17 from '@modules/diklat/component/Angkatan17'

export default function Angkatan17Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan17 />
    </>
  )
}
Angkatan17Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
