import Head from 'next/head'
import Admin from '@layout/Admin'
import CreateJadwalDokter from '@modules/admin/jadwalDokter/CreateJadwalDokter'

export default function CreateJadwalDokterPage() {
  return (
    <>
      <Head>
        <title>Create Jadwal Dokter</title>
        <meta name='description' content='website RSKG' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CreateJadwalDokter />
    </>
  )
}
CreateJadwalDokterPage.getLayout = page => (
  <>
    <div className='flex'>
      <Admin />
      {page}
    </div>
  </>
)