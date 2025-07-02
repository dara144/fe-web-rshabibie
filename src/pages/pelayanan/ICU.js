import Head from 'next/head'
import Nav from '@layout/Nav'
import ICU from '@modules/pelayanan/ICU'

export default function ICUPage() {
  return (
    <>
      <Head>
        <title>ICU</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <ICU />
    </>
  )
}
ICUPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
