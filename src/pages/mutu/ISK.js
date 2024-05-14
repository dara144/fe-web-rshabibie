import Head from 'next/head'
import Nav from '@layout/Nav'
import ISK from '@modules/mutu/component/ISK'

export default function PenggunaanAPDPage() {
  return (
    <>
      <Head>
        <title>Data Surveilens Infeksi-ISK</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ISK />
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
