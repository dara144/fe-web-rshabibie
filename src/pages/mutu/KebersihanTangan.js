import Head from 'next/head'
import Nav from '@layout/Nav'
import KebersihanTangan from '@modules/mutu/component/KebersihanTangan'

export default function KebersihanTanganPage() {
  return (
    <>
      <Head>
        <title>Indikator Kebersihan Tangan</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <KebersihanTangan />
    </>
  )
}
KebersihanTanganPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
