import Head from 'next/head'
import Nav from '@layout/Nav'
import LaporHasilKritisLab from '@modules/mutu/component/LaporHasilKritisLab'

export default function LaporHasilKritisLabPage() {
  return (
    <>
      <Head>
        <title>Indikator Pelaporan Hasil Kritis Laboratorium</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LaporHasilKritisLab />
    </>
  )
}
LaporHasilKritisLabPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
