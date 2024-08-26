import Head from 'next/head'
import ModuleHome from '@modules/home'
export default function Home() {
  return (
    <>
      <Head>
        <title>RS Khusus Ginjal Ny. R.A. Habibie</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <ModuleHome />
    </>
  )
}
import Nav from '@layout/Nav'
Home.getLayout = page => (
  <>
    <Nav />
    {page}
  </>
)
