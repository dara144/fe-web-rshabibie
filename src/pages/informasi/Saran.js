import Head from 'next/head'
import Nav from '@layout/Nav'
import Saran from '@modules/informasi/Saran'

export default function SaranPage() {
  return (
    <>
      <Head>
        <title>Saran</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Saran />
    </>
  )
}
SaranPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
