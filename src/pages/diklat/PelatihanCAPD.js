import Head from 'next/head'
import Nav from '@layout/Nav'
import PelatihanCAPD from '@modules/diklat/PelatihanCAPD'

export default function PelatihanCAPDPage() {
  return (
    <>
      <Head>
        <title>Pelatihan CAPD</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <PelatihanCAPD />
    </>
  )
}
PelatihanCAPDPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
