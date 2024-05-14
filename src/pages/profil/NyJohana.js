import Head from 'next/head'
import Nav from '@layout/Nav'
import NyJohana from '@modules/profil/component/NyJohana'

export default function NyJohanaPage() {
  return (
    <>
      <Head>
        <title>Ny. Johana Sunarti Nasution</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NyJohana />
    </>
  )
}
NyJohanaPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
