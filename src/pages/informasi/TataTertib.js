import Head from 'next/head'
import Nav from '@layout/Nav'
import TataTertib from '@modules/informasi/TataTertib'

export default function TataTertibPage() {
  return (
    <>
      <Head>
        <title>TataTertib</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TataTertib />
    </>
  )
}
TataTertibPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
