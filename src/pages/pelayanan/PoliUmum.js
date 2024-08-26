import Head from 'next/head'
import Nav from '@layout/Nav'
import PoliUmum from '@modules/pelayanan/PoliUmum'

export default function PoliUmumPage() {
  return (
    <>
      <Head>
        <title>Poli Umum</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <PoliUmum />
    </>
  )
}
PoliUmumPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
