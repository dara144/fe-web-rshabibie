import Head from 'next/head'
import Nav from '@layout/Nav'
import PelayananBedah from '@modules/pelayanan/PelayananBedah'

export default function PelayananBedahPage() {
  return (
    <>
      <Head>
        <title>Pelayanan Bedah</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PelayananBedah />
    </>
  )
}
PelayananBedahPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
