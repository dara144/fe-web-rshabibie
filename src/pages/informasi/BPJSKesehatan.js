import Head from 'next/head'
import Nav from '@layout/Nav'
import BPJSKesehatan from '@modules/informasi/BPJSKesehatan'

export default function BPJSKesehatanPage() {
  return (
    <>
      <Head>
        <title>BPJS Kesehatan</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <BPJSKesehatan />
    </>
  )
}
BPJSKesehatanPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
