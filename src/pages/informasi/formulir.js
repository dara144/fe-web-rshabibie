import Head from 'next/head'
import Nav from '@layout/Nav'
import Formulir from '@modules/informasi/formulir'

export default function formulirPage() {
  return (
    <>
      <Head>
        <title>Formulir Online</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Formulir />
    </>
  )
}
formulirPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
