import Head from 'next/head'
import Nav from '@layout/Nav'
import IdentifikasiPasien from '@modules/mutu/component/IdentifikasiPasien'

export default function IdentifikasiPasienPage() {
  return (
    <>
      <Head>
        <title>Indikator Identifikasi Pasien</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <IdentifikasiPasien />
    </>
  )
}
IdentifikasiPasienPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
