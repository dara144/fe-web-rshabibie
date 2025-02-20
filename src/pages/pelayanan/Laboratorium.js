import Head from 'next/head'
import Nav from '@layout/Nav'
import Laboratorium from '@modules/pelayanan/Laboratorium'

export default function LaboratoriumPage() {
  return (
    <>
      <Head>
        <title>Laboratorium</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Laboratorium />
    </>
  )
}
LaboratoriumPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
