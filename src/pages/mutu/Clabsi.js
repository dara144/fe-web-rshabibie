import Head from 'next/head'
import Nav from '@layout/Nav'
import Clabsi from '@modules/mutu/component/Clabsi'

export default function PenggunaanAPDPage() {
  return (
    <>
      <Head>
        <title>Data Surveilens Infeksi-Clabsi</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Clabsi />
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
