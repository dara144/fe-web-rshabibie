import Admin from '@layout/Admin'
import UpdateDokter from '@modules/admin/dokter/UpdateDokter'
import Head from 'next/head'

export default function Update() {
  return (
    <>
      <Head>
        <title>Update Dokter</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <UpdateDokter />
    </>
  )
}
Update.getLayout = page => (
  <>
    <div className='flex'>
      <Admin />
      {page}
    </div>
  </>
)