import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan15 from '@modules/diklat/component/Angkatan15'

export default function Angkatan15Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan15 />
    </>
  )
}
Angkatan15Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
