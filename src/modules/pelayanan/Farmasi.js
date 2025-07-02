import { Grid, List, Text } from '@mantine/core'
import style from './assets/Farmasi.module.css'
import Border from '@component/border'
import farmasi from './assets/image/Farmasi.JPG'
import PFAR from './assets/image/PFAR.JPG'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

function Farmasi() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  return (
    <>
      <Text className={style.h1}
      >Instalasi Farmasi</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <p className='text-md mt-5 font-thin'>Instalasi Farmasi merupakan unit penunjang pelayanan kesehatan yang berperan dalam pengelolaan, penyediaan, dan distribusi obat-obatan serta alat kesehatan yang dibutuhkan dalam proses perawatan pasien. Pelayanan farmasi kami mendukung pasien <b>rawat jalan, rawat inap, ruang perawatan intensif (ICU), IGD,</b> serta program <b>Medical Check Up (MCU)</b> dengan prinsip rasional, aman, dan tepat guna.
            <br />
            <br />
            Farmasi kami dikelola oleh tenaga Apoteker dan Tenaga Teknis Kefarmasian yang kompeten dan berpengalaman, serta dilengkapi sistem manajemen obat berbasis teknologi informasi untuk memastikan ketersediaan dan ketepatan layanan.
          </p>
        </div>
      </main>
      <div className={style.bg}>
        <div className={style.wrapper}>
          <div className={style.h2}>
            <Grid>
              <Grid.Col md={12} lg={5} xl={4}>
                <div
                  ref={myRef}
                >
                  <Image className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                    src={farmasi}
                    alt="Farmasi"
                  />
                </div>
                <br />
                <div
                  ref={myRef1}
                >
                  <Image className={`${style.image} ${myImageIsVisible1 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                    src={PFAR}
                    alt="Farmasi"
                  />
                </div>
              </Grid.Col>
              <Grid.Col md={10} lg={7} xl={8}>
                <br />
                <p className='text-md px-5 mb-2'>LAYANAN<span className='text-[#1E90FF]'> YANG TERSEDIA:</span></p>
                <ul className='list-disc text-md font-thin mt-3 px-14'>
                  <li><b>Dispensing resep dokter</b> untuk pasien rawat jalan dan rawat inap</li>
                  <li><b>Konseling obat</b> oleh apoteker bagi pasien yang membutuhkan edukasi khusus</li>
                  <li><b>Layanan obat emergensi</b> untuk pasien IGD dan ruang perawatan intensif (ICU)</li>
                  <li><b>Pemantauan terapi obat (Monitoring Drug Therapy)</b></li>
                  <li><b>Pelayanan resep  pasien BPJS, asuransi, dan umum</b></li>
                </ul>
                <br />
                <p className='text-md px-5 mb-2'>JAM PELAYANAN<span className='text-[#1E90FF]'> FARMASI</span></p>
                <ul className='list-disc text-md font-thin mt-3 px-14'>
                  <li><b>Senin – Jumat:</b> 07.00 – 20.00 WIB</li>
                  <li><b>Pelayanan 24 jam </b>untuk pasien IGD, rawat inap. Dan ruang perawatan intensif (ICU)</li>
                </ul>
                <br />
                <p className='text-md mt-3 font-thin'>Farmasi kami berkomitmen untuk tidak hanya menyediakan obat yang dibutuhkan, tetapi juga memastikan bahwa pasien memahami cara penggunaan obat dengan benar agar hasil terapi optimal dan risiko efek samping dapat diminimalkan.</p>
              </Grid.Col>
            </Grid>
          </div>
        </div>
      </div>
    </>
  )

}

export default Farmasi;
