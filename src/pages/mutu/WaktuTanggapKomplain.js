import Head from 'next/head'
import Nav from '@layout/Nav'
import WaktuTanggapKomplain from '@modules/mutu/component/WaktuTanggapKomplain'

export default function WaktuTanggapKomplainPage() {
  return (
    <>
      <Head>
        <title>Kecepatan Waktu Tanggap Komplain</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <WaktuTanggapKomplain />
    </>
  )
}
WaktuTanggapKomplainPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
