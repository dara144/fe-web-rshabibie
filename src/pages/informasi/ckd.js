import Head from 'next/head'
import Nav from '@layout/Nav'
import CKD from '@modules/informasi/component/ckd'

export default function ckdPage() {
  return (
    <>
      <Head>
        <title>Chronic Kidney Disease (CKD)</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CKD />
    </>
  )
}
ckdPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
