import Head from 'next/head'
import Nav from '@layout/Nav'
import AlurPendaftaran from '@modules/informasi/AlurPendaftaran'

export default function AlurPendaftaranPage() {
  return (
    <>
      <Head>
        <title>Alur Pendaftaran</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AlurPendaftaran />
    </>
  )
}
AlurPendaftaranPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
