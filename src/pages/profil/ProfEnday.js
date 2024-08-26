import Head from 'next/head'
import Nav from '@layout/Nav'
import ProfEnday from '@modules/profil/component/ProfEnday'

export default function ProfEndayPage() {
  return (
    <>
      <Head>
        <title>Prof. Dr. H. Enday Sukandar, Sp.PD-KGH</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <ProfEnday />
    </>
  )
}
ProfEndayPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
