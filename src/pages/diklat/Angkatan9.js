import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan9 from '@modules/diklat/component/Angkatan9'

export default function Angkatan9Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan9 />
    </>
  )
}
Angkatan9Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
