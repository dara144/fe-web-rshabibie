import Head from 'next/head'
import Nav from '@layout/Nav'
import HD from '@modules/pelayanan/HD'

export default function HDPage() {
  return (
    <>
      <Head>
        <title>Hemodialisis (HD)</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <HD />
    </>
  )
}
HDPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
