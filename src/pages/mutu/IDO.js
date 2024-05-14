import Head from 'next/head'
import Nav from '@layout/Nav'
import IDO from '@modules/mutu/component/IDO'

export default function PenggunaanAPDPage() {
  return (
    <>
      <Head>
        <title>Data Surveilens Infeksi-IDO</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <IDO />
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
