import Head from 'next/head'
import Nav from '@layout/Nav'
import DigiHealth from '@modules/informasi/component/digiHealthRSKG'

export default function DigiHealthPage() {
  return (
    <>
      <Head>
        <title>DigiHealth RSKG</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DigiHealth />
    </>
  )
}
DigiHealthPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
