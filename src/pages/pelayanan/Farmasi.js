import Head from 'next/head'
import Nav from '@layout/Nav'
import Farmasi from '@modules/pelayanan/Farmasi'

export default function FarmasiPage() {
  return (
    <>
      <Head>
        <title>instalasi Farmasi</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Farmasi />
    </>
  )
}
FarmasiPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
