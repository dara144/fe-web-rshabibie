import Head from 'next/head'
import Nav from '@layout/Nav'
import TundaOPElektif from '@modules/mutu/component/TundaOPElektif'

export default function TundaOPElektifPage() {
  return (
    <>
      <Head>
        <title>Indikator Penundaan Operasi Elektif</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <TundaOPElektif />
    </>
  )
}
TundaOPElektifPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
