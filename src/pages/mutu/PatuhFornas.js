import Head from 'next/head'
import Nav from '@layout/Nav'
import PatuhFornas from '@modules/mutu/component/PatuhFornas'

export default function PatuhFornasPage() {
  return (
    <>
      <Head>
        <title>Indikator Kepatuhan Penggunaan Formularium Nasional</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <PatuhFornas />
    </>
  )
}
PatuhFornasPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
