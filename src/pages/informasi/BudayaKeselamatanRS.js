import Head from 'next/head'
import Nav from '@layout/Nav'
import BudayaKeselamatanRS from '@modules/informasi/BudayaKeselamatanRS'

export default function BudayaKeselamatanRSPage() {
  return (
    <>
      <Head>
        <title>Budaya Keselamatan Rumah Sakit</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <BudayaKeselamatanRS />
    </>
  )
}
BudayaKeselamatanRSPage.getLayout = page => (
  <Nav>
    <div className='absolute w-full'>
      {page}
    </div>
  </Nav>
)
