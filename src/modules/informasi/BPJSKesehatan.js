import { Image, Text } from '@mantine/core'
import style from './assets/BPJSKesehatan.module.css'
import Border from '@component/border'

function BPJSKesehatan() {
  return (
    <>
      <Text className={style.h1}
      >BPJS Kesehatan</Text>
      <main className={style.wrapper}>
        <div style={{
          width: '85vw'
        }}>
          <Border />
          <div className='grid lg:grid-flow-col grid-col-2 mt-6 '>

            <div style={{
              marginBottom: '4vh',
              marginRight: '2vw'
            }}>
                <Image className='lg:w-96 sm:w-full'
                radius="md"
                src="/BPJS.jpg"
                alt="BPJSKesehatan"
              />
            </div>

            <div className={style.h2}>

                <p className='text-sm font-thin'>Berikut ini syarat-syarat yang berlaku untuk pasien yang menggunakan BPJS Kesehatan di RS Khusus Ginjal Ny. R.A. Habibie :</p>
                <ul className='list-decimal text-sm mt-3 mb-12 font-thin px-4'>
                  <li>Pasien HD & Operasi peserta BPJS Kesehatan Dalam Kota Bandung, diwajibkan setiap kali kunjungan menunjukan kartu BPJS Kesehatan Asli, KTP, dan surat rujukan online untuk Hemodialisis / Operasi dari dokter di RS setempat di Bandung dan telah dilegalisasi petugas BPJS kesehatan di RS tersebut. (Untuk RSHS harus ada surat keterangan penuh), traveling Dialisis dan hasil Laboratorium.</li>
                  <li>Pasien HD & Operasi peserta BPJS Kesehatan Luar Kota Bandung, diwajibkan menunjukan kartu BPJS kesehatan asli KTP dan surat rujukan online untuk hemodialisis / operasi dari dokter di RS setempat, surat pengantar dari BPJS Kesehatan center di Rumah Sakit tersebut traveling dialisis dan hasil laboratorium.</li>
                  <li>Pasien poli spesialis BPJS Kesehatan dalam kota Bandung, diwajibkan menunjukan kartu BPJS Kesehatan dan KTP, surat rujukan online dari PPK 1 (Puskesmas, Klinik, Dokter keluarga) atau surat pengantar dari dokter RS Khusus Ginjal Ny. R.A. Habibie.</li>
                  <li>Pasien poli spesialis BPJS Kesehatan luar kota Bandung, diwajibkan menunjukan kartu BPJS Kesehatan dan KTP, surat rujukan online dari PPK 1 (Puskesmas, Klinik, Dokter keluarga) dan surat pengantar dari BPJS Kesehatan di RS tersebut.</li>
                  <li>Pasien peserta BPJS Kesehatan yang akan mengambil obat penyakit kronis dapat dilakukan ke PPK 1 atau dapat melalui poli spesialis penyakit dalam dengan syarat pasien harus dibawa, apabila pasien tidak dibawa, obat tidak dapat diberikan sesuai ketentuan yang berlaku.</li>
                  <li>Pengambilan obat untuk pasien BPJS Kesehatan harus sesuai dengan jadwal pengambilan yang tertera di kartu kuning, jika tidak membawa kartu kuning obat tidak diberikan.</li>
                  <li>Pasien BPJS Kesehatan surat rujukan intern online untuk pengambilan obat, kontrol penyakit dalam, fungsi acittes dll diminta pada saat hemodialisis ke dokter jaga apabila tidak membawa rujukan tidak dapat diberikan pelayanan.</li>
                </ul>
 
            </div>
          </div>
        </div>
      </main>
    </>
  )

}

export default BPJSKesehatan;
