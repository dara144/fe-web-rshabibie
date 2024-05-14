import Head from 'next/head'
import Nav from '@layout/Nav'
import RawatInap from '@modules/pelayanan/RawatInap'

export default function RawatInapPage() {
  return (
    <>
      <Head>
        <title>Rawat Inap</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RawatInap />
    </>
  )
}
RawatInapPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
