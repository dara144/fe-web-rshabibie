import Head from 'next/head'
import Nav from '@layout/Nav'
import Mitra from '@modules/informasi/Mitra'

export default function MitraPage() {
  return (
    <>
      <Head>
        <title>Mitra & Rekan</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Mitra />
    </>
  )
}
MitraPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
