import Head from 'next/head'
import Nav from '@layout/Nav'
import Epo from '@modules/informasi/Epo'

export default function EpoPage() {
  return (
    <>
      <Head>
        <title>Asuhan Keperawatan</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Epo />
    </>
  )
}
EpoPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
