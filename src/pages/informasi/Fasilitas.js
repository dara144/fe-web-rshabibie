import Head from 'next/head'
import Nav from '@layout/Nav'
import Fasilitas from '@modules/informasi/Fasilitas'

export default function FasilitasPage() {
  return (
    <>
      <Head>
        <title>Fasilitas RSKG</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Fasilitas />
    </>
  )
}
FasilitasPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
