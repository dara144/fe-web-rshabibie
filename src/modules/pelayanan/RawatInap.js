import { Badge, Box, Card, Grid, Group, List, Modal, Text } from '@mantine/core'
import style from './assets/RawatInap.module.css'
import Border from '@component/border'
import VIP from './component/RanapVIP'
import Kelas1 from './component/RanapKls1'
import Kelas2 from './component/RanapKls2'
import Kelas3 from './component/RanapKls3'
import { Carousel } from '@mantine/carousel'
import Isolasi from './component/RanapIsolasi'
function RawatInap() {
  return (
    <>
      <Text className={style.h1}
      >Rawat Inap</Text>
      <main className={style.wrapper}>
        <div style={{
          width: '85vw'
        }}>
          <Border />

          <div className={style.h2}>
            <p className='text-md mt-5 font-thin mb-5'>Instalasi Rawat Inap RS Khusus Ginjal Ny. R.A. Habibie menyediakan pelayanan medis selama 24 jam meliputi observasi,diagnosis,  pengobatan, keperawatan dan rehabilitasi. Didukung oleh tim dokter spesialis, perawat terlatih, serta tenaga kesehatan lainnya, kami berkomitmen memberikan perawatan yang aman, nyaman, dan berpusat pada kebutuhan pasien.
              <br />
              <br />
              Meskipun fokus layanan kami adalah pada penyakit ginjal dan hipertensi, <b>rawat inap kami terbuka untuk pasien dengan berbagai kondisi medis</b>, baik kasus khusus ginjal maupun penyakit umum lainnya.
              <br />
              <br />
              <b>Fasilitas Kamar Rawat Inap:</b>
              <ul className='list-disc text-md font-thin mt-3 px-14'>
                <li>Kamar <b>VIP</b></li>
                <li>Kamar Kelas <b>I, II, dan III</b></li>
                <li>Kamar <b>Isolasi</b> (untuk pasien dengan kondisi tertentu)</li>
                <li><b>Nutrisi Klinik & Gizi</b> yang disesuaikan dengan kondisi pasien</li>
              </ul>
            </p>
            <Carousel slideSize="30%" slideGap="lg" loop align="start">
              <Carousel.Slide><VIP /></Carousel.Slide>
              <Carousel.Slide><Kelas1 /></Carousel.Slide>
              <Carousel.Slide><Kelas2 /></Carousel.Slide>
              <Carousel.Slide><Kelas3 /></Carousel.Slide>
              <Carousel.Slide><Isolasi /></Carousel.Slide>
            </Carousel>
            <p className='text-md mt-5 font-thin mb-5'>Setiap kamar dirancang untuk mendukung proses penyembuhan pasien, dengan lingkungan yang bersih, tenang, dan fasilitas penunjang yang lengkap. Kami juga menyediakan <b>layanan penunjang 24 jam</b>, seperti:
              <br />
              <ul className='list-disc text-md font-semibold mt-3 px-14'>
                <li>Laboratorium</li>
                <li>Radiologi (Rontgen & USG)</li>
                <li>Farmasi</li>
                <li>Layanan Gizi</li>
                <li>Rehabilitasi Medik</li>
                <li>Ruang HD (Hemodialisis) 24 Jam bagi pasien rawat inap</li>
              </ul>
              <br />
              <b>Jenis Pasien yang Dilayani:</b>
              <ul className='list-disc text-md font-thin mt-3 px-14'>
                <li>Pasien BPJS</li>
                <li>Pasien Asuransi</li>
                <li>Pasien Umum</li>
              </ul>
              <br />
              Dengan sistem pelayanan yang terintegrasi dan responsif, Instalasi Rawat Inap kami bertujuan untuk memberikan pengalaman perawatan yang optimal, tidak hanya dalam aspek medis tetapi juga dalam aspek kenyamanan dan pelayanan keluarga pasien.
            </p>
            <p className='text-md mt-5 font-thin mb-5'><label className='text-red-500'>*</label> Setiap ruang rawat inap RSKG Ny.R.A. Habibie dilengkapi fasilitas free Wi-Fi.</p>
          </div>
        </div>
      </main>
    </>
  )

}

export default RawatInap;
