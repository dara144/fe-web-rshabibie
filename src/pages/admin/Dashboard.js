import Admin from '@layout/Admin'
import Head from 'next/head'

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Admin />
    </>
  )
}
