import Head from 'next/head'
import Nav from '@layout/Nav'
import MCU from '@modules/pelayanan/MCU'

export default function MCUPage() {
  return (
    <>
      <Head>
        <title>MCU</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MCU />
    </>
  )
}
MCUPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
