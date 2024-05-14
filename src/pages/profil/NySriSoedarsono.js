import Head from 'next/head'
import Nav from '@layout/Nav'
import NySriSoedarsono from '@modules/profil/component/NySriSoedarsono'

export default function NySriSoedarsonoPage() {
  return (
    <>
      <Head>
        <title>Ny. Sri Soedarsono</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NySriSoedarsono />
    </>
  )
}
NySriSoedarsonoPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
