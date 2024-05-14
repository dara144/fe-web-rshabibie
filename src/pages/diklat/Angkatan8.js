import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan8 from '@modules/diklat/component/Angkatan8'

export default function Angkatan8Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan8 />
    </>
  )
}
Angkatan8Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
