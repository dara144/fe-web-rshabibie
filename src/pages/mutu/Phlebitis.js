import Head from 'next/head'
import Nav from '@layout/Nav'
import Phlebitis from '@modules/mutu/component/Phlebitis'

export default function PenggunaanAPDPage() {
  return (
    <>
      <Head>
        <title>Data Surveilens Infeksi-Phlebitis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Phlebitis />
    </>
  )
}
PenggunaanAPDPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
