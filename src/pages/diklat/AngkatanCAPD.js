import Head from 'next/head'
import Nav from '@layout/Nav'
import AngkatanCAPD from '@modules/diklat/component/AngkatanCAPD'

export default function AngkatanCAPDPage() {
  return (
    <>
      <Head>
        <title>Peserta Lulusan Pelatihan Dialisis</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <AngkatanCAPD />
    </>
  )
}
AngkatanCAPDPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
