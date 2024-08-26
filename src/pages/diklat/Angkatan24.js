import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan24 from '@modules/diklat/component/Angkatan24'

export default function Angkatan24Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan24 />
    </>
  )
}
Angkatan24Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
