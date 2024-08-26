import Head from 'next/head'
import Nav from '@layout/Nav'
import PLama from '@modules/informasi/component/PasienLama'

export default function PLamaPage() {
  return (
    <>
      <Head>
        <title>Pasien Lama</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <PLama />
    </>
  )
}
PLamaPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
