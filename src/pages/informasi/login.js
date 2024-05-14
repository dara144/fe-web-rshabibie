import Head from 'next/head'
import Nav from '@layout/Nav'
import Login from '@modules/informasi/login'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Login />
    </>
  )
}
LoginPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
