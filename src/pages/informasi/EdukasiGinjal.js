import Head from 'next/head'
import Nav from '@layout/Nav'
import EdukasiGinjal from '@modules/informasi/component/EdukasiGinjal'

export default function EdukasiGinjalPage() {
  return (
    <>
      <Head>
        <title>Penyakit Ginjal - Gejala, Penyebab, dan Pengobatan</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <EdukasiGinjal />
    </>
  )
}
EdukasiGinjalPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
