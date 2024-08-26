import Head from 'next/head'
import Nav from '@layout/Nav'
import ProfilDiklat from '@modules/diklat/ProfilDiklat'

export default function ProfilDiklatPage() {
  return (
    <>
      <Head>
        <title>Profil Diklat</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <ProfilDiklat />
    </>
  )
}
ProfilDiklatPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
