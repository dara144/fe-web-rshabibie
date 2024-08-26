import Head from 'next/head'
import Nav from '@layout/Nav'
import PelatihanHD from '@modules/diklat/PelatihanHD'

export default function PelatihanHDPage() {
  return (
    <>
      <Head>
        <title>Pelatihan HD</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <PelatihanHD />
    </>
  )
}
PelatihanHDPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
