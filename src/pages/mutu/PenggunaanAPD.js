import Head from 'next/head'
import Nav from '@layout/Nav'
import PenggunaanAPD from '@modules/mutu/component/PenggunaanAPD'

export default function PenggunaanAPDPage() {
  return (
    <>
      <Head>
        <title>Indikator Penggunaan APD</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <PenggunaanAPD />
    </>
  )
}
PenggunaanAPDPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
