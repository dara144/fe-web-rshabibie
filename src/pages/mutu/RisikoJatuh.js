import Head from 'next/head'
import Nav from '@layout/Nav'
import RisikoJatuh from '@modules/mutu/component/RisikoJatuh'

export default function RisikoJatuhPage() {
  return (
    <>
      <Head>
        <title>Indikator Kepatuhan Upaya Pencegahan Risiko Pasien Jatuh</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <RisikoJatuh />
    </>
  )
}
RisikoJatuhPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
