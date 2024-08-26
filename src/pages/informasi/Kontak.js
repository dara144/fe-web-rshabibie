import Head from 'next/head'
import Nav from '@layout/Nav'
import Kontak from '@modules/informasi/Kontak'

export default function KontakPage() {
  return (
    <>
      <Head>
        <title>Kontak</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Kontak />
    </>
  )
}
KontakPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
