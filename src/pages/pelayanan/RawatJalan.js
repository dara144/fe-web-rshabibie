import Head from 'next/head'
import Nav from '@layout/Nav'
import RawatJalan from '@modules/pelayanan/RawatJalan'

export default function RawatJalanPage() {
  return (
    <>
      <Head>
        <title>Rawat Jalan</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RawatJalan />
    </>
  )
}
RawatJalanPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
