import { Grid, List, Text } from '@mantine/core'
import style from './assets/RawatJalan.module.css'
import Border from '@component/border'
import Image from 'next/future/image';
import rajal from './assets/image/FRawatJalan.jpg'
import rajal1 from './assets/image/FRawatJalan2.jpg'
import RTungguRajal from './assets/image/RTungguRajal.jpg'
import { useInView } from 'react-intersection-observer';

function RawatJalan() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  return (
    <>
      <Text className={style.h1}
      >Rawat Jalan</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <Grid>
            <Grid.Col md={12} lg={5} xl={4}>
              <div
                ref={myRef}
              >
                <Image className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  radius="md"
                  src={rajal}
                  alt="Rawat Jalan"
                />
              </div>
              <div
                ref={myRef1}
              >
                <Image className={`${style.image} ${myImageIsVisible1 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  src={RTungguRajal}
                  alt="Rawat Jalan"
                />
              </div>
            </Grid.Col>
            <Grid.Col md={10} lg={7} xl={8}>
              <p className='text-md font-thin'>Poliklinik Rumah Sakit Khusus Ginjal Ny. R.A. Habibie memberikan pelayanan setiap hari kerja mulai pukul 08.00-17.00, dan  di setiap ruang tunggu pasien di fasilitasi FREE WIFI.
              </p>
              <p className='text-md px-5 mb-2'>POLIKLINIK <span className='text-[#1E90FF]'> SPESIALIS</span></p>
              <ul className='list-disc text-md font-thin mt-3 px-14'>
                <li>Spesialis Penyakit Dalam Konsultan Ginjal Hipertensi</li>
                <li>Spesialis Penyakit Dalam</li>
                <li>Spesialis Jantung & Pembuluh Darah</li>
                <li>Spesialis Paru</li>
                <li>Spesialis Anak</li>
                <li>Spesialis Bedah</li>
                <li>Spesialis Gigi & Mulut</li>
              </ul>
              <br />
              <p className='text-md px-5 mb-2'>POLIKLINIK <span className='text-[#1E90FF]'> UMUM</span></p>
              <ul className='list-disc text-md font-thin mt-3 px-14'>
                <li>Konsultasi dengan dokter umum yang bersertifikat Dialisis</li>
                <li>Untuk informasi dan pendaftaran dapat menghubungi no WA : 0813-1323-5789</li>
              </ul>
              <br />
              <p className='text-md px-5 mb-2'>POLIKLINIK <span className='text-[#1E90FF]'> CAPD</span></p>
              <ul className='list-disc text-md font-thin mt-3 px-14'>
                <li>Konsultasi CAPD oleh Dokter terlatih</li>
                <li>Training / pelatihan pelaksanaan CAPD untuk pasien</li>
                <li>Ganti transfer set</li>
                <li>PET, adekuasi CAPD</li>
                <li>Pemeriksaan Adekuasi CAPD</li>
                <li>Pemasangan kateter CAPD</li>
              </ul>
            </Grid.Col>
          </Grid>
        </div>
      </main >
    </>
  )

}

export default RawatJalan;
