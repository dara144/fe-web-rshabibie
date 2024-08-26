import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan4 from '@modules/diklat/component/Angkatan4'

export default function Angkatan4Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan4 />
    </>
  )
}
Angkatan4Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
