import Head from 'next/head'
import Nav from '@layout/Nav'
import CompanyProfile from '@modules/profil/CompanyProfile'

export default function CompanyProfilePage() {
  return (
    <>
      <Head>
        <title>Company Profile</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CompanyProfile />
    </>
  )
}
CompanyProfilePage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
