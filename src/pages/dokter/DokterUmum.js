import Head from 'next/head'
import Nav from '@layout/Nav'
import DokterUmum from '@modules/dokter/DokterUmum'

export default function DokterUmumPage() {
  return (
    <>
      <Head>
        <title>Dokter Umum</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <DokterUmum />
    </>
  )
}
DokterUmumPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
