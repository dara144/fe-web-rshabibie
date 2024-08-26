import Head from 'next/head'
import Nav from '@layout/Nav'
import WaktuTungguRajal from '@modules/mutu/component/WaktuTungguRajal'

export default function WaktuTungguRajalPage() {
  return (
    <>
      <Head>
        <title>Indikator Waktu Tunggu Rawat Jalan</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <WaktuTungguRajal />
    </>
  )
}
WaktuTungguRajalPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
