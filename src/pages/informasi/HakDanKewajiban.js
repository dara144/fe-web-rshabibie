import Head from 'next/head'
import Nav from '@layout/Nav'
import HakDanKewajiban from '@modules/informasi/HakDanKewajiban'

export default function HakDanKewajibanPage() {
  return (
    <>
      <Head>
        <title>Hak Dan Kewajiban</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <HakDanKewajiban />
    </>
  )
}
HakDanKewajibanPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
