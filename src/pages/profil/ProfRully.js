import Head from 'next/head'
import Nav from '@layout/Nav'
import ProfRully from '@modules/profil/component/ProfRully'

export default function ProfRullyPage() {
  return (
    <>
      <Head>
        <title>Prof. Dr. Rully MA Roesli, Sp.PD-KGH</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <ProfRully />
    </>
  )
}
ProfRullyPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
