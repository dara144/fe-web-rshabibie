import Head from 'next/head'
import Nav from '@layout/Nav'
import News from '@modules/informasi/News'

export default function NewsPage() {
  return (
    <>
      <Head>
        <title>News</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <News />
    </>
  )
}
NewsPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
