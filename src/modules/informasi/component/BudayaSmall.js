import { Grid, List, Text } from '@mantine/core'
import style from '../assets/BudayaKeselamatanRS.module.css'
import Border from '@component/border'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import BudayaKeselamatan from '../assets/image/BudayaKeselamatan.png'
import Kepemimpinan from '../assets/image/Kepemimpinan.png'
import Kerjasama from '../assets/image/Kerjasama.png'
import BerbasisData from '../assets/image/BerbasisData.png'
import Komunikasi from '../assets/image/Komunikasi.png'
import BudayaBelajar from '../assets/image/BudayaBelajar.png'
import BudayaAdil from '../assets/image/BudayaAdil.png'

function BudayaSmall() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  const { ref: myRef2, inView: myImageIsVisible2 } = useInView()
  const { ref: myRef3, inView: myImageIsVisible3 } = useInView()
  const { ref: myRef4, inView: myImageIsVisible4 } = useInView()
  const { ref: myRef5, inView: myImageIsVisible5 } = useInView()
  const { ref: myRef6, inView: myImageIsVisible6 } = useInView()
  return (
    <>
      <Text className={style.h1}
      >Budaya Keselamatan Rumah Sakit</Text>
      <main className={style.wrapper}>
        <Border />

        <div className={style.h2}>
          <Grid className='mb-2'>
            <Grid.Col md={12} lg={4} xl={3.5}>
              <div
                ref={myRef}
              >
                <Image className={`${style.image} ${myImageIsVisible ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  src={BudayaKeselamatan}
                  alt="Budaya Keselamatan Rumah Sakit"
                  priority
                />
              </div>
            </Grid.Col>
            <Grid.Col md={12} lg={8} xl={8}>
              <span className='text-xl'>DEFINISI</span>
              <p className='text-md mt-3 font-[360]'>Budaya keselamatan dirumah sakit merupakan suatulingkungan kolaboratif dimana para dokter dan karyawan :</p>
              <List className='list-decimal text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                <List.Item>Saling menghargai satu sama lain</List.Item>
                <List.Item>Para pimpinan mendorong kerja sama tim yang efektif dan menciptakan rasa aman secara psikologis</List.Item>
                <List.Item>Anggota tim dapat belajar dari insiden keselamatan pasien</List.Item>
                <List.Item> Para pemberi layanan menyadari bahwa ada keterbatasan manusia yang bekerja dalam suatu sistem yang kompleks dan terdapat suatu proses pembelajaran serta upaya untuk mendorong perbaikan</List.Item>
              </List>
            </Grid.Col>
          </Grid>
        </div>
      </main>
      {/* <div className={style.bg}> */}
      <div className={style.wrapper}>
        <div className={style.h2}>
          <br />
          <span className='text-xl'>ELEMEN BUDAYA <b className='text-[#1E90FF]'>KESELAMATAN</b></span>
          <div className='flex'>
            <List className='list-none text-md mt-3' withPadding>
              <List.Item mb='md'>1. KEPEMIMPINAN</List.Item>
              <div ref={myRef1}>
                <Image
                  src={Kepemimpinan}
                  className={`${style.image1} ${myImageIsVisible1 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  alt='Kepemimpinan'
                  width={500}
                  height={450}
                  priority
                />
              </div>
              <List className='list-none text-md mt-3 font-[350] text-[#4B3F3F]'>
                <List.Item>Peranan pemimpin merupakan elemen kunci untuk merancang strategi & membangun stuktur RS yang bisa menjadi acuan dalam membentuk dan memelihara budaya keselamatan.</List.Item>
              </List>
            </List>
          </div>
          <hr className='mb-3 mt-3' />
          <div className='flex'>
            <List className='list-none text-md mt-3' withPadding>
              <List.Item mb='md'>2. KERJASAMA DALAM TIM</List.Item>
              <div ref={myRef2}>
                <Image
                  src={Kerjasama}
                  className={`${style.image1} ${myImageIsVisible2 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  alt='Kerjasama'
                  width={900}
                  height={600}
                  priority
                />
              </div>
              <List className='list-none text-md mt-3 font-[350] text-[#4B3F3F]'>
                <List.Item>Semangat kolegalitas & kolaborasi diantara para eksekutor dan staf yang langsung berhubungan dengan para pasien hubungan kerjasama yang terbuka, dapat dipercaya, saling hormat dan dinamis diwarnai oleh struktur dan ciri anggota tim, status, hirarki dan aturan main dalam tim tersebut.</List.Item>
              </List>
            </List>
          </div>
          <hr className='mb-3 mt-3' />
          <div className='flex'>
            <List className='list-none text-md mt-3' withPadding>
              <List.Item mb='md'>3. BERBASIS DATA</List.Item>
              <div ref={myRef3}>
                <Image
                  src={BerbasisData}
                  className={`${style.image1} ${myImageIsVisible3 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  alt='Berbasis Data'
                  width={900}
                  height={600}
                  priority
                />
              </div>
              <List className='list-none text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
                <List.Item>Rumah sakit yang berbasis data unggul dalam hal belajar dari kesalahan dan dari kesuksesan sebab memiliki data untuk menelusuri dan menganalisis permasalahan sampai ke akarnya. RS harus transparan dalam melaporkan setiap kejadian yang tidak diinginkan yang perlu diperbarui secara reguler</List.Item>
              </List>
            </List>
          </div>
          <hr className='mb-3 mt-3' />
          <div className='flex'>
            <List className='list-none text-md mt-3' withPadding>
              <List.Item mb='md'>4. KOMUNIKASI</List.Item>
              <div ref={myRef4}>
                <Image
                  src={Komunikasi}
                  className={`${style.image1} ${myImageIsVisible4 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  alt='Komunikasi'
                  width={900}
                  height={600}
                  priority
                />
              </div>
              <List className='list-none text-md mt-3 font-[350] text-[#4B3F3F]'>
                <List.Item>Penelitian telah membuktikan bahwa masalah komunikasi merupakan salah satu penyebab utama dalam keselamatan pasien. Kualitas informasi pasien pada rekam medis iformasi penting tentang pasien tidak disampaikan pada waktu pengalihan shift petugas dokter tidak menyampaikan instruksi nya secara jelas.</List.Item>
              </List>
            </List>
          </div>
          <hr className='mb-3 mt-3' />
          <div className='flex'>
            <List className='list-none text-md mt-3' withPadding>
              <List.Item mb='md'>5. BUDAYA BELAJAR</List.Item>
              <div ref={myRef5}>
                <Image
                  src={BudayaBelajar}
                  className={`${style.image1} ${myImageIsVisible5 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  alt='Budaya Belajar'
                  width={800}
                  height={500}
                  priority
                />
              </div>
              <List className='list-none text-md mt-3 font-[350] text-[#4B3F3F]'>
                <List.Item>Budaya belajar tercipta bila budaya RS telah menetapkan bahwa setiap kesalahan baik pada sistem ataupun perorangan harus dianggap sebagai substansi pembelajaran dan tidak saling menyalahkan dimulai dari pimpinan umpan bali <i>(feedback)</i> yang transparan</List.Item>
              </List>
            </List>
          </div>
          <hr className='mb-3 mt-3' />
          <div className='flex'>
            <List className='list-none text-md mt-3' withPadding>
              <List.Item mb='md'>6. BUDAYA ADIL</List.Item>
              <div ref={myRef6}>
                <Image
                  src={BudayaAdil}
                  className={`${style.image1} ${myImageIsVisible6 ? style.animateShowImage1 : style.animateHiddenImage1}`}
                  alt='Budaya Adil'
                  width={460}
                  height={300}
                  priority
                />
              </div>
              <List className='list-none text-md mt-3 font-[350] text-[#4B3F3F]'>
                <List.Item>Melihat kesalahan sebagaiakibat kegagalan sistem ketimbang kesalahan individu, dan pada saat bersamaan si pelalku perlu diminta pertanggung jawabannya tanpa menghukum.</List.Item>
              </List>
            </List>
          </div>
          <hr className='mb-10 mt-3' />
          <span className='text-xl'>PROGRAM BUDAYA KESELAMATAN <b className='text-[#1E90FF]'>DI RUMAH SAKIT MELIPUTI</b></span>
          <List className='list-decimal text-md mt-3 mb-8 font-[350] text-[#4B3F3F]' withPadding>
            <List.Item>Perilaku memberikan pelayanan yang aman secara konsisten untuk terjadinya kesalahan pada pelayanan yang beresiko tinggi</List.Item>
            <List.Item>Setiap individu dapat melaporkan kesalahan dan insiden tanpa takut dikenakan sanksi atau teguran dan diperlukan secara adil <i>(just culture)</i></List.Item>
            <List.Item>Kerjasama tim dan koordinasi untuk menyelesaikan masalah keselamatan pasien</List.Item>
            <List.Item>Komitmen pimpinan rumah sakit dalam mendukung staf seperti waktu kerja para staf, pendidikan, metode yang aman untuk melaporkan masalah dan hal lainnya untuk menyelesaikan masaalah keselamatan</List.Item>
            <List.Item>Identifikasi dan mengenali masalah akibat perilaku yang tidak diinginkan (perilaku sembronon)</List.Item>
            <List.Item>Evaluasi budaya secara berkala dengan metode seperti kelompok fokus diskusi (FGD), wawancara dengan staf dan analisis data</List.Item>
            <List.Item>Mendorong kerjasama dan membangun sistem dalam mengembangkan budaya perilaku aman</List.Item>
          </List>
          <span className='text-xl'>10 DIMENSI <b className='text-[#1E90FF]'>BUDAYA KESELAMATAN</b></span>
          <List className='list-decimal text-md mt-3 font-[350] text-[#4B3F3F]' withPadding>
            <List.Item>Komunikasi tentang kesalahan</List.Item>
            <List.Item>Tanggapan atas kesalahan</List.Item>
            <List.Item>Pembelajaran organisasi penigkatan berkelanjutan</List.Item>
            <List.Item>Keterbukaan komunikasi</List.Item>
            <List.Item><i>Staffing</i> (kepegawaian dan kecepatan kerja)</List.Item>
            <List.Item><i>HandsOff</i> dan pertukaran informasi</List.Item>
            <List.Item><i>Supervisor</i>, manajer, atau dukungan pimpinan klinis untuk keselematan pasien</List.Item>
            <List.Item>Kerjasama tim</List.Item>
            <List.Item>Frekuensi pelaporan kejadian</List.Item>
            <List.Item>Dukungan manajemen rumah sakit</List.Item>
          </List>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default BudayaSmall;
