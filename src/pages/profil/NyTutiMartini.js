import Head from 'next/head'
import Nav from '@layout/Nav'
import NyTutiMartini from '@modules/profil/component/NyTutiMartini'

export default function NyTutiMartiniPage() {
  return (
    <>
      <Head>
        <title>Ny. Tuti Marini Puspowardojo (R.A. Habibie)</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NyTutiMartini />
    </>
  )
}
NyTutiMartiniPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
