import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan32 from '@modules/diklat/component/Angkatan32'

export default function Angkatan32Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Angkatan32 />
    </>
  )
}
Angkatan32Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
