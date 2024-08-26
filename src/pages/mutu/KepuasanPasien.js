import Head from 'next/head'
import Nav from '@layout/Nav'
import KepuasaanPasien from '@modules/mutu/component/KepuasanPasien'

export default function KepuasaanPasienPage() {
  return (
    <>
      <Head>
        <title>Kepuasan Pasien</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <KepuasaanPasien />
    </>
  )
}
KepuasaanPasienPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
