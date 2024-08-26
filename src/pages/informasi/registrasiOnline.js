import Head from 'next/head'
import Nav from '@layout/Nav'
import Registrasi from '@modules/informasi/registrasiOnline'

export default function RegistrasiPage() {
  return (
    <>
      <Head>
        <title>Registrasi</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Registrasi />
    </>
  )
}
RegistrasiPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
