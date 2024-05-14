import Head from 'next/head'
import Nav from '@layout/Nav'
import Angkatan19 from '@modules/diklat/component/Angkatan19'

export default function Angkatan19Page() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Angkatan19 />
    </>
  )
}
Angkatan19Page.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
