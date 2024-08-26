import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan21 from '@modules/diklat/component/Angkatan21'

export default function Angkatan21Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan21 />
    </>
  )
}
Angkatan21Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
