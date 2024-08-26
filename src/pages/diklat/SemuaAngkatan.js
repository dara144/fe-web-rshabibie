import Head from 'next/head'
import Nav from '@layout/Nav'
import SemuaAngkatan from '@modules/diklat/component/SemuaAngkatan'

export default function SemuaAngkatanPage() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <SemuaAngkatan />
    </>
  )
}
SemuaAngkatanPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
