import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan25 from '@modules/diklat/component/Angkatan25'

export default function Angkatan25Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan25 />
    </>
  )
}
Angkatan25Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
