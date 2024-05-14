import Head from 'next/head'
import Nav from '@layout/Nav'
import EdukasiCuciTangan from '@modules/informasi/component/EdukasiCuciTangan'

export default function EdukasiCuciTanganPage() {
  return (
    <>
      <Head>
        <title>Pentingnya Cuci Tangan Dengan Sabun Dan Cara Tepat melakukannya</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <EdukasiCuciTangan />
    </>
  )
}
EdukasiCuciTanganPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
