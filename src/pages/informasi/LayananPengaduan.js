import Head from 'next/head'
import Nav from '@layout/Nav'
import LayananPengaduan from '@modules/informasi/LayananPengaduan'

export default function LayananPengaduanPage() {
  return (
    <>
      <Head>
        <title>Layanan Pengaduan</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <LayananPengaduan />
    </>
  )
}
LayananPengaduanPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
