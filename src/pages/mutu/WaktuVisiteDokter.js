import Head from 'next/head'
import Nav from '@layout/Nav'
import WaktuVisiteDokter from '@modules/mutu/component/WaktuVisiteDokter'

export default function WaktuVisiteDokterPage() {
  return (
    <>
      <Head>
        <title>Indikator Waktu Visite Dokter</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WaktuVisiteDokter />
    </>
  )
}
WaktuVisiteDokterPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
