import Head from 'next/head'
import Nav from '@layout/Nav'
import Radiologi from '@modules/pelayanan/Radiologi'

export default function RadiologiPage() {
  return (
    <>
      <Head>
        <title>Radiologi</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Radiologi />
    </>
  )
}
RadiologiPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
