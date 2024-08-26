import Head from 'next/head'
import Nav from '@layout/Nav'
import GagalGinjal from '@modules/informasi/component/gagalginjal'

export default function gagalginjalPage() {
  return (
    <>
      <Head>
        <title>Gagal Ginjal</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <GagalGinjal />
    </>
  )
}
gagalginjalPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
