import Head from 'next/head'
import Nav from '@layout/Nav'
import PBaru from '@modules/informasi/component/PasienBaru'

export default function PBaruPage() {
  return (
    <>
      <Head>
        <title>Pasien Baru</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PBaru />
    </>
  )
}
PBaruPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
