import Head from 'next/head'
import Nav from '@layout/Nav'
import Mutu from '@modules/mutu/IndikatorMutu'

export default function MutuPage() {
  return (
    <>
      <Head>
        <title>Indikator Mutu</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Mutu />
    </>
  )
}
MutuPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
