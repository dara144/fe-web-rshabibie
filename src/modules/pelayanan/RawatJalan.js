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
            </Grid.Col>
            <Grid.Col md={10} lg={7} xl={8}>
              <p className='text-md font-thin'>Poliklinik Rumah Sakit Khusus Ginjal Ny. R.A. Habibie memberikan pelayanan setiap hari kerja mulai pukul 08.00-17.00, dan  di setiap ruang tunggu pasien di fasilitasi FREE WIFI.
              </p>
              <List className='list-none text-md mt-3'>
                <List.Item>POLIKLINIK <span className='text-[#1E90FF]'>SPESIALIS</span></List.Item>
                <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Penyakit Dalam</List.Item>
                  <List.Item>Penyakit Paru</List.Item>
                  <List.Item>Penyakit Ginjal dan Hipertensi (Konsultan)</List.Item>
                  <List.Item>Bedah Vaskuler (Konsultan) - <i>One Day Surgery</i></List.Item>
                  <List.Item>Gigi dan Mulut</List.Item>
                  <List.Item>Ginjal Anak</List.Item>
                  <List.Item>Urologi</List.Item>
                </List>
              </List>
            </Grid.Col>
            <Grid.Col md={12} lg={5} xl={4}>
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
              <List className='list-none text-md mt-3'>
                <List.Item>POLIKLINIK <span className='text-[#1E90FF]'>CPAD</span></List.Item>
                <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Konsultasi CAPD oleh Dokter terlatih</List.Item>
                  <List.Item>Training / pelatihan pelaksanaan CAPD untuk pasien</List.Item>
                  <List.Item>Ganti transfer set</List.Item>
                  <List.Item>PET, adekuasi CAPD</List.Item>
                  <List.Item>Pemeriksaan Adekuasi CAPD</List.Item>
                  <List.Item>Pemasangan kateter CAPD</List.Item>
                </List>
                <br />
                <List.Item>POLIKLINIK <span className='text-[#1E90FF]'>UMUM</span></List.Item>
                <List className='list-disc text-md mt-3 mb-6 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Konsultasi dengan Dokter Umum yang bersertifikat Dialisis</List.Item>
                  <List.Item className='font-[350] text-[#4B3F3F]'>Untuk informasi dan pendaftaran dapat menghubungi no WA : 0813-1323-5789</List.Item>
                </List>
              </List>
            </Grid.Col>
          </Grid>
        </div>
      </main >
    </>
  )

}

export default RawatJalan;
