import Head from 'next/head'
import Nav from '@layout/Nav'
import PatuhCP from '@modules/mutu/component/PatuhCP'

export default function PenggunaanAPDPage() {
  return (
    <>
      <Head>
        <title>Indikator Kepatuhan Terhadap Alur Klinis (<i>Clinical Pathway</i>)</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PatuhCP />
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
