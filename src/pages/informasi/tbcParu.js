import Head from 'next/head'
import Nav from '@layout/Nav'
import TbcParu from '@modules/informasi/component/tbcParu'

export default function tbcParuPage() {
  return (
    <>
      <Head>
        <title>TBC Pada Paru</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TbcParu />
    </>
  )
}
tbcParuPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
