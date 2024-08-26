import Head from 'next/head'
import Nav from '@layout/Nav'
import PesertaDiklat from '@modules/diklat/PesertaDiklat'

export default function PesertaDiklatPage() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <PesertaDiklat />
    </>
  )
}
PesertaDiklatPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
