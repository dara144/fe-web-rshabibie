import { Text } from '@mantine/core'
import style from './assets/MCU.module.css'
import Border from '@component/border'
import ModalMCU from './component/ModalMCU';
import PaketKhususMCU from './component/PaketKhususMCU';
import PaketSkriningMCU from './component/PaketSkriningMCU';
import PaketMCU from './component/PaketMCU';
import PelayananMCU from './component/PelayananMCU';
function MCU() {
  return (
    <>
      <Text className={style.h1}
      >Instalasi Rawat Jalan & Medical Check Up (MCU)</Text>
      <main className={style.wrapper}>
        <div style={{
          width: '85vw'
        }}>
          <Border />
        </div>
        <div className={style.h2}>
          <p className='text-md font-thin px-5'>Instalasi Rawat Jalan RS Khusus Ginjal Ny. R.A. Habibie menyediakan layanan konsultasi dan pemeriksaan oleh dokter umum serta dokter spesialis, baik di bidang penyakit ginjal maupun bidang kesehatan lainnya. Pelayanan dilakukan secara terjadwal dengan sistem pendaftaran yang efisien dan ruang tunggu yang nyaman, untuk menunjang kenyamanan pasien.
            <br />
            <br />
            Kami melayani pasien <b>BPJS, asuransi,</b> maupun <b>pasien umum,</b> dengan berbagai layanan konsultatif seperti:
          </p>
          <ul className='list-disc text-md font-thin mt-3 px-14'>
            <li>Poli Penyakit Dalam (Spesialis Ginjal & Hipertensi)</li>
            <li>Poli Bedah Vaskular</li>
            <li>Poli Paru</li>
            <li>Poli Jantung</li>
            <li>Poli Anak</li>
            <li>Poli Rehabilitasi Medik</li>
            <li>Poli Umum dan penunjang lainnya</li>
          </ul>
          <p className='text-md font-thin px-5'>Selain layanan konsultasi, kami juga menyediakan layanan <b>Medical Check Up (MCU)</b> yang dirancang untuk membantu deteksi dini berbagai kondisi kesehatan, baik secara individu maupun kolektif (MCU perusahaan). Pemeriksaan dilakukan oleh tim profesional dengan dukungan fasilitas laboratorium dan radiologi lengkap.
            <br />
            <br />
            <b>Jenis Paket MCU yang Tersedia:</b>

            <ul className='list-disc text-md mt-3 px-14'>
              <li>Paket Ginjal  : Rp 798.000,-</li>
              <li>Paket Bronze  : Rp 1.103.000,-</li>
              <li>Paket Silver  : Rp 1.682.500,-</li>
              <li>Paket Gold    : Rp 2.572.500,-</li>
              <li>Paket Sekolah </li>
            </ul>
            <br />
            <b>Jam Pelayanan Rawat Jalan & MCU:</b>
            <ul className='list-disc text-md font-thin mt-3 px-14'>
              <li><b>Senin - Jumat:</b> 08.00 - 15.00 WIB</li>
              <li><b>Sabtu:</b> 08.00 - 12.00 WIB</li>
              <li>(Hari Minggu: tutup)</li>
            </ul>
            <br />
            Untuk informasi jadwal praktik dokter atau reservasi layanan MCU, silakan hubungi layanan informasi kami atau lakukan pendaftaran secara online melalui sistem yang tersedia.
          </p>
        </div>
      </main>
    </>
  )

}

export default MCU;
