import { Box, Button, List, Title } from '@mantine/core'
import style from './assets/ProfilDiklat.module.css'
import ActiveLink from '@component/ActiveLink';
import { useHover } from '@mantine/hooks';
import { MdEmail, MdKeyboardArrowRight, MdLocationOn } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import diklat from '../diklat/assets/image/Diklat2.jpg';
import VisiMisi from '../diklat/assets/image/visi misi fix.jpeg';
import komitmen from '../diklat/assets/image/komitmen diklat fix.jpg';
import pelatihanDiklat from '../diklat/assets/image/ProfilDiklat.jpg';
import struktur from '../diklat/assets/image/struktur diklat.jpg';
import Image from 'next/future/image';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { IoIosCall } from 'react-icons/io';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

function ProfilDiklat() {
  const { hovered, ref } = useHover()
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const { ref: myRef1, inView: myImageIsVisible1 } = useInView()
  return (
    <>
      <div className={style.h2}>
        <div className='max-w-4xl lg:flex lg:max-w-full'>
          <div ref={myRef}>
            <Image
              src={diklat}
              blurDataURL={diklat}
              alt='latar belakang'
              className={`${style.image} ${myImageIsVisible ? style.animateShowImage : style.animateHiddenImage}`}
            />
          </div>

          <Box className='mx-auto mr-[7vw] ml-14'>
            <Title className='text-2xl font-bold mt-10'>Latar <label className={style.h3}>Belakang</label></Title>
            <p className='text-md mt-5 mr-3 font-thin'>Jumlah penderita gagal ginjal yang memerlukan tindakan dialisis setiap tahun terus meningkat. Untuk memenuhi kebutuhan pelayanan ini, pendirian unit-unit dialisis di sarana pelayanan kesehatan pemerintah dan swasta terus meningkat sehingga dibutuhkan tenaga perawat, dokter, dan teknisi yang mempunyai keahlian di bidang dialisis.
              <br />
              <br />
              RS Khusus Ginjal Ny. R.A. Habibie Bandung bekerja sama dengan Pernefri Korwil Jawa Barat dan RS Hasan Sadikin Bandung menyelenggarakan Pelatihan Dialisis untuk tenaga perawat, dokter umum, dokter spesialis penyakit dalam, dan teknisi. Pelatihan Dialisis dilaksanakan 2x dalam 1 tahun dengan tenaga pengajar yang terdiri dari para pakar yang berkompeten di bidangnya.
            </p>
            <ul className='list-disc text-md mt-3 font-thin px-5'>
              <li>Berdiri sejak tahun 2000.</li>
              <li>Pendidikan dan Pelatihan Teknik Dialisis bagi perawat.</li>
              <li>Diselenggarakan setahun / 2 kali.</li>
              <li>Tim Pengajar : Nefrolog, Ahli Bedah Vaskuler, Apoteker, Manajer, Perawat dan Teknisi yang berpengalaman.</li><ActiveLink activeClassName={'text-primary'} href='https://drive.google.com/file/d/1urKatFbiCK-v7UxhovYPQ5Cr-ithqOFa/view?usp=sharing'>
                <a className='text-[#1E90FF] italic'>Lihat Kalender Kegiatan Unit Diklat 2025.</a>
              </ActiveLink>
            </ul>
          </Box>
        </div>
      </div>

      <div className={style.bg}>
        <br />
        <div className={style.wrapper}>
          <div className={style.h2}>
            <Title className='text-xl mb-3 font-bold'>Pelatihan <label className={style.h3}>Bagi Perawat</label></Title>
            <p className='text-md mt-5 mr-3 font-thin'>Pelatihan yang diselenggarakan oleh Unit Diklat RS Khusus Ginjal Ny.R.A. Habibie Bandung pada saat ini baru dua (2) yaitu :
            </p>
            <ul className='list-decimal text-md font-thin mt-3 px-4'>
              <li>Pelatihan Dialisis Bagi perawat di RS dan klinik Khusus Dialisis
                Pelatihan ini berbasis kompetensi, yang memungkinkan peserta untuk :</li>
              <ul className='list-disc text-md font-thin mt-2 mb-3 px-4'>
                <li>Mencapai materi yang ditetapkan</li>
                <li>Meningkatkan keterampilan langkah-langkah dalam memperoleh kompetensi dibidang keperawatan dialisis</li>
                <li>Mendapatkan penilaian tentang keberhasilan mencapai kompetensi yang ditetapkan pada akhir pelatihan</li>
              </ul>
              <p className='text-md mt-5 mr-3 font-thin'>Pada saat ini untuk pelatihan Dialisis menggunakan metode <i>Blended</i> , yaitu gabungan <i>on line</i> dan <i>off line</i> (Klassikal). Materi disampaikan secara berupa teori, latihan kasus (Diskusi), praktek berupa simualsi dan praktek mandiri secara langsung kepada pasien. Pelatihan ini berlangsung selama kurang lebih 89 hari.
                <br />
                <br />
                Narasumber pada pelatihan ini adalah para pakar Konsultan Ginjal Hipertensi dan para perawat dialysis yang sudah tersertifikasi, serta para pembimbing klinik. Biaya pelatihan untuk tahun 2025 sebesar Rp 21.000.000,- ( Dua Puluh satu Juta Rupiah) teramsuk biaya Uji Kompetesni CBP INNA.
              </p>
              <br />
              <li>Pelatihan <i>Continous Ambulatory peritoneal Dialysis </i>(CAPD) untuk Perawat. Pelatihan ini bertujuan untuk agar setelah mengikuti pelatihan CAPD peserta mampu melakukan asuhan keperawatan pasien CAPD. Pelatihan ini berbasis kompetensi, yang memungkinkan peserta untuk :
                <ul className='list-disc text-md font-thin mt-2 px-4'>
                  <li>Mencapai materi yang ditetapkan</li>
                  <li>Meningkatkan keterampilan langkah-langkah dalam memperoleh kompetensi dibidang keperawatan CAPD</li>
                  <li>Mendapatkan penilaian tentang keberhasilan mencapai kompetensi yang ditetapkan pada akhir pelatihan</li>
                </ul>
              </li>
              <p className='text-md mt-5 mr-3 font-thin'>Pelatihan ini bersalangsung selama kurang lebih selama 10 hari denagn jumlah Jam pelajaran Latihan (JPL) sebesar 83 JPL berupa Teori, Praktek dan Praktek lapangan. Metode yang digunakan pada pelatihan CAPD pun sama menggunak metode <i>Blended</i>. Selain Kegiatan pelatihan Unit Diklat RS Khusus ginjal Ny. R.A. Habibie juga melaksanakn kegiatan berupa peningkatan kompetensi dengan Satuan Kredit dari kememkes. Kegiatn Peningkatan kompetsnsi ini berupa : Seminar, Webinar, Workshop, dll.
                <br />
                <br />
                Pada kegiatan peningkatan kompetensi Unit Diklat menjadwalkan kegiatan yang bersifat gratis atau peserta tidak membayar. Kegiatan ini biasanya dilaksanakn pada hari Ulang tahun RS Khusu Ginjal Ny R.A. Habibie dan kegiatan memperingati World Kidney Day (WKD), ataupun kegiatan lainnya.
              </p>
            </ul>
          </div>
        </div>
      </div>

      <div className={style.bg}>
        <div className={style.wrapper}>
          <div className={style.h2}>
            <Title className='text-xl mb-3 font-bold'>VISI MISI <label className={style.h3}>RS Khusus Ginjal Ny. R.A. Habibie</label></Title>
            <Image
              src={VisiMisi}
              blurDataURL={VisiMisi}
              alt='latar belakang'
              className={style.image2}
            />
            <Image
              src={komitmen}
              blurDataURL={komitmen}
              alt='latar belakang'
              className={style.image2}
            />
            <Title className='text-xl mb-3 font-bold'>STRUKTUR ORGANISASI <label className={style.h3}>UNIT DIKLAT</label></Title>
            <Image
              src={struktur}
              blurDataURL={struktur}
              alt='latar belakang'
              className={style.image2}
            />
          </div>
        </div>

        <hr className='mt-7 mb-8' />

        <div className={style.h2}>
          <div className='lg:flex lg:max-w-full'>
            <div ref={myRef1}>
              <Image
                src={pelatihanDiklat}
                blurDataURL={pelatihanDiklat}
                alt='latar belakang'
                className={`${style.image3} ${myImageIsVisible1 ? style.animateShowImage : style.animateHiddenImage}`}
              />
            </div>
            <Box className='mr-[7vw] mb-[2vh] ml-14 mt-5'>
              <label className='text-xl mb-3 font-bold'>
                Kegiatan Unit <b className={style.h3}>Pendidikan Dan Pelatihan</b></label>
              <ul className='list-decimal text-md mt-3 font-thin px-12'>
                <li>Pelatihan dialisis bagi perawat yang dilaksanakan dua kali setiap tahunnya</li>
                <li>Peningkatan kompetensi tenaga kesehatan dengan In House Training, Webinar, Simposium, dan workshop</li>
              </ul>
              <br />
              <div className={style.h2}>
                <label className='text-lg font-normal'>Info Lebih Lanjut Hubungi Diklat :</label>
                <div className='mt-5 text-sm font-thin'>
                  <MdLocationOn className='absolute h-4 w-4' /> <span className='ml-7 '>Jl. Tubagus Ismail No.46 - 40134</span>
                  <hr className='mr-16 mt-2 mb-2' />

                  <ActiveLink href='tel:085135150313'>
                    <a className='hover:text-[#1E90FF]'>
                      <IoIosCall className='absolute h-4 w-4' /> <span className='ml-7 '>0851-3515-0313</span>
                      <hr className='mr-16 mt-2 mb-2' />
                    </a>
                  </ActiveLink>

                  <ActiveLink href='https://wa.link/dxmnuf'>
                    <a className='hover:text-cyan-500 relative'>
                      <IoLogoWhatsapp className='absolute h-4 w-4 top-[0px]' /> <span className='ml-7 '>0851-3515-0313</span>
                      <hr className='mr-16 mt-2 mb-2' />
                    </a>
                  </ActiveLink>

                  <ActiveLink href='https://compose.mail.yahoo.com/?to=pelatihandialisis@yahoo.com'>
                    <a className='underline hover:text-[#1E90FF] relative'>
                      <MdEmail className='absolute h-5 w-4 top-[0px]' /> <span className='ml-7 '>pelatihandialisis@yahoo.com</span>
                      <hr className='mr-16 mt-2 mb-2' />
                    </a>
                  </ActiveLink>

                  <ActiveLink href='https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=pelatihandialisisrskg@gmail.com'>
                    <a className='underline hover:text-[#1E90FF] relative'>
                      <MdEmail className='absolute h-5 w-4 top-[0px]' /> <span className='ml-7 '>pelatihandialisisrskg@gmail.com</span>
                      <hr className='mr-16 mt-2 mb-2' />
                    </a>
                  </ActiveLink>

                  <ActiveLink href='https://www.instagram.com/diklat_rskg_nyrahabibie/'>
                    <a className='underline hover:text-[#1E90FF] relative'>
                      <BsInstagram className='absolute h-5 w-4 top-[0px]' /> <span className='ml-7 '>@diklat_rskg_nyrahabibie</span>
                      <hr className='mr-16 mt-2 mb-2' />
                    </a>
                  </ActiveLink>

                  <ActiveLink href='https://www.facebook.com/p/Pelatihan-Dialisis-100069877826341/?locale=id_ID'>
                    <a className='underline hover:text-[#1E90FF] relative'>
                      <FaFacebook className='absolute h-5 w-4 top-[0px]' /> <span className='ml-7 '>Pelatihan Dialisis</span>
                      <hr className='mr-16 mt-2' />
                    </a>
                  </ActiveLink>
                </div>
              </div>
              <br />
            </Box>
          </div>
        </div>
      </div>

    </>
  )

}

export default ProfilDiklat;
