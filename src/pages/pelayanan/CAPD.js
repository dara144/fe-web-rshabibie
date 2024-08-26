import Head from 'next/head'
import Nav from '@layout/Nav'
import CAPD from '@modules/pelayanan/CAPD'

export default function CAPDPage() {
  return (
    <>
      <Head>
        <title>CAPD</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <CAPD />
    </>
  )
}
CAPDPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
