import { Grid, Group, List, Modal, Text } from '@mantine/core'
import style from './assets/IGD.module.css'
import Border from '@component/border'
import Image from 'next/future/image'
import igd from './assets/image/IGD.jpg'
import PIGD from './assets/image/PIGD.JPG'
import { useState } from 'react'
import border from './assets/image/border.png'
import { useInView } from 'react-intersection-observer'

function IGD() {
  const [opened, setOpened] = useState(false);
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  return (
    <>
      <Text className={style.h1}
      >Instalasi Gawat Darurat</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <p className='text-md'>INFORMASI UMUM</p>
          <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
            <List.Item>IGD RSKG Ny. R.A. Habibie Bandung buka 24 jam terus menerus.</List.Item>
            <List.Item>IGD RSKG Ny. R.A. Habibie Bandung melayani pasien gawat darurat maupun tidak gawat darurat.</List.Item>
            <List.Item>Tenaga medis IGD RSKG Ny. R.A. Habibie Bandung selalu on dite dan bergilir.</List.Item>
            <List.Item>IGD RSKG Ny. R.A. Habibie Bandung menerima pasien umum (datang sendiri) dan pasien rujukan baik dari dokter praktek, bidan maupun rumah sakit lainnya.</List.Item>
          </List>
          <i className='text-[#1E90FF] font-[350] px-12 cursor-pointer'
            onClick={() => setOpened(true)}>Klik disini untuk melihat informasi lebih detail..</i>
        </div>

        <div className={style.h2}>
          <Modal
            size='95%'
            opened={opened}
            onClose={() => setOpened(false)}
          >
            <div className='mx-[2vw]'>
              <div className={style.h2}>
                <Grid>
                  <Grid.Col md={12} lg={5} xl={4}>
                    <Image className='rounded-lg shadow-xl'
                      width={500}
                      src={igd}
                      alt="IGD"
                    />
                  </Grid.Col>
                  <Grid.Col md={12} lg={7} xl={8}>
                    <div className='grid grid-cols-2'>
                      <Image className={style.border}
                        width={500}
                        src={border}
                        alt="border"
                      />
                      <Image className={style.border}
                        width={500}
                        src={border}
                        alt="border"
                      />
                    </div>
                    <p className='text-md mt-3'>TATA TERTIB</p>
                    <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                      <List.Item>Keluarga dan pasien wajib menjaga ketenangan dan ketertiban selama berada diruangan IGD RSKG Ny. R.A. Habibie Bandung.</List.Item>
                      <List.Item>Pasien yang masuk ke ruang periksa IGD hanya boleh didampingi oleh 1-2 orang.</List.Item>
                    </List>
                    <p className='text-md mt-6'>KRITIK DAN SARAN</p>
                    <p className='text-md mt-3 font-thin text-[#4B3F3F]'>Kritik dan saran pelayanan IGD dapat disampaikan melalui kotak saran yang sudah disediakan.</p>
                  </Grid.Col>
                </Grid>
                <p className='text-md mt-6'>DOKTER JAGA IGD RSKG NY. R.A. HABIBIE BANDUNG</p>
                <p className='text-md mt-3 font-thin text-[#4B3F3F]'>Dokter-dokter jaga dengan kualifikasi bersertifikat GELS/ATLS/ACLS :  </p>
                <List className='list-decimal text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Dr. Noor Rusma Hidayati.</List.Item>
                  <List.Item>Dr. Cut Indra Murzi.</List.Item>
                  <List.Item>Dr. Esther Sylviani.</List.Item>
                </List>
                <p className='text-md mt-6'>DOKTER KONSULEN RSKG NY. R.A. HABIBIE BANDUNG</p>
                <p className='text-md mt-3 font-thin text-[#4B3F3F]'>Dokter konsulen yang bisa melayani secara on call 24 call dengan spesialisasi sebagai berikut :</p>
                <List className='list-decimal text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Spesialis Penyakit Dalam.</List.Item>
                  <List.Item>Spesialis Bedah Vaskuler.</List.Item>
                  <List.Item>Spesialis Jantung.</List.Item>
                  <List.Item>Spesialis Urologi.</List.Item>
                </List>
              </div>
            </div>
          </Modal>
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
                    src={PIGD}
                    alt="Pelayanan IGD"
                  />
                </div>
              </Grid.Col>
              <Grid.Col md={10} lg={7} xl={8}>
                <List className='list-none text-md mt-3' withPadding>
                  <List.Item>PELAYANAN</List.Item>
                  <List.Item className='font-[350] text-[#4B3F3F]'>IGD RSKG Ny. R.A. Habibie Bandung melayani kasus-kasus :</List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Penyakit Dalam.</List.Item>
                    <List.Item>Penyakit Bedah.</List.Item>
                  </List>
                </List>
                <List className='list-none text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Prioritas pelayanan gawat darurat :</List.Item>
                  <List.Item>Pasien yang harus segera dilayani dan didahulukan adalah :</List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Gangguan pernafasan dan jalan nafas.</List.Item>
                    <List.Item>Kehilangan cairan yang banyak (muntah, diare, demam berdarah).</List.Item>
                    <List.Item>Keracunan.</List.Item>
                    <List.Item>Kejang-kejang.</List.Item>
                    <List.Item>Penurunan kesadaran.</List.Item>
                  </List>
                </List>

              </Grid.Col>
              <Grid.Col md={12} lg={5} xl={4}>
                <div
                  ref={myRef1}
                >
                  <Image className={`${style.image} ${myImageIsVisible1 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                    src={igd}
                    alt="IGD"
                  />
                </div>
              </Grid.Col>
              <Grid.Col md={10} lg={7} xl={8}>
                <List className='list-none text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                  <List.Item>Pasien yang pelayanannya sementara bisa ditangguhkan :</List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Demam, batuk, pilek.</List.Item>
                    <List.Item>Sakit perut dan diare ringan.</List.Item>
                    <List.Item>Kecelakaan lalu lintas ringan.</List.Item>
                    <List.Item>Penyakit kulit.</List.Item>
                    <List.Item>Tidak bisa BAB dan BAK.</List.Item>
                  </List>
                </List>

                <List className='list-none text-md mt-6' withPadding>
                  <List.Item>TARIF IGD</List.Item>
                  <List className='list-disc text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                    <List.Item>Rp. 55.000,00 sudah termasuk pemeriksaan dokter jaga</List.Item>
                    <List.Item>Tindakan medik sesuai dengan peraturan yang berlaku di RSKG Ny. R.A. Habibie Bandung.</List.Item>
                    <List.Item>Alat habis pakai disesuaikan dengan pemakaian</List.Item>
                  </List>
                </List>
              </Grid.Col>
            </Grid>
          </div>
        </div>
      </div>
    </>
  )

}

export default IGD;
