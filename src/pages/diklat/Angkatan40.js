import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan40 from '@modules/diklat/component/Angkatan40'

export default function Angkatan40Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan40 />
    </>
  )
}
Angkatan40Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
