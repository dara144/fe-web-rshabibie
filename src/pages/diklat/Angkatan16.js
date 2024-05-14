import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan16 from '@modules/diklat/component/Angkatan16'

export default function Angkatan16Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan16 />
    </>
  )
}
Angkatan16Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
