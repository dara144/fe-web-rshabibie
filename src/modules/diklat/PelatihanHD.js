import { Box, Title } from '@mantine/core'
import style from './assets/PelatihanCAPD.module.css'
import ActiveLink from '@component/ActiveLink';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import struktur from '../diklat/assets/image/StrukturProgram.avif';
import { IoIosCall, IoLogoWhatsapp } from 'react-icons/io';
import Image from 'next/future/image';
import CarouselPelatihanHD from './component/CarouselPelatihanHD';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

function PelatihanHD() {
  return (
    <>
      <CarouselPelatihanHD />
      {/* disini diganti video yt https://youtu.be/iNtU5zK-YaY?si=-xppQURMQQQr33lh */}
      <div className={style.h2}>
        <Box className='ml-[7vw]'>
          <Title className='text-2xl font-bold mt-10'>Latar <label className={style.h3}>Belakang</label></Title>
          <p className='text-md mt-5 mr-3 font-thin'>Jumlah Penderita Gagal Ginjal yang memerlukan tindakan dialisis setiap tahun terus meningkat. Untuk memenuhi kebutuhan pelayanan ini, pendirian unit unit dialisis di sarana pelayanan kesehatan pemerintah dan swasta terus meningkat sehingga dibutuhkan tenaga perawat, dokter dan teknisi yang mempunyai keahlian di bidang dialisis. Pelayanan dialisis yang berkualitas ditentukan oleh sumber daya manusia berdasarkan kompetensinya untuk menurunkan morbiditas dan mortalitas pasien dialisis.
            <br />
            <br />
            Berkenaan dengan hal tersebut Rumah Sakit Khusus Ginjal Ny. R.A. Habibie Bandung, bekerja sama dengan Pernefri Korwil Jawa Barat dan RS. Hasan Sadikin Bandung, menyelenggarakan Pelatihan Dialisis untuk tenaga perawat dan dokter umum.
            <br />
            <br />
            Pelatihan Dialisis dilaksanakan 2 (dua) kali dalam setahun dengan tenaga pengajar yang terdiri dari para pakar yang berkompeten di bidangnya, dan telah meluluskan lebih dari 1300 orang tenaga ahli dialisis yang terdiri dari perawat, dokter umum, dokter spesialis penyakit dalam dan teknisi dari seluruh Indonesia. <ActiveLink activeClassName={'text-primary'} href='https://drive.google.com/file/d/17uevXMI2AScIBYvqfflsGRMi7MGMo2L3/view?usp=sharing'>
              <a className='text-[#1E90FF] italic'>Lihat brosur pelatihan HD disini.</a>
            </ActiveLink>
          </p>
        </Box >

        <div className={style.bg}>
          <br />
          <div className={style.wrapper}>
            <Title className='text-xl mb-3 font-bold'>Materi Pelatihan <label className={style.h3}>Dialisis</label></Title>
            <p className='text-md'>
              A. Tujuan Umum</p>
            <p className='text-md ml-5 mt-1 mb-3 font-thin'>Setelah mengikuti pelatihan ini peserta mampu memberikan asuhan keperawatan dialisis di Rumah Sakit (RS) dan Klinik Khusus Dialisis sesuai dengan kewenangannya. <ActiveLink activeClassName={'text-primary'} href='https://drive.google.com/file/d/1lw5IMBzgaOwx27pgs8q3fSRiqxyXNv4q/view?usp=sharing'>
              <a className='text-[#1E90FF] italic'>Formulir Pendaftaran HD Perawat disini.</a>
            </ActiveLink></p>

            <p className='text-md'>
              B. Tujuan Khusus </p>
            <p className='text-md ml-5 mt-1 font-thin'>Pelatihan Dialisis Bagi Perawat di Rumah Sakit dan Klinik Khusus Dialisis :</p>
            <ul className='list-decimal text-md font-semibold ml-5 mt-3 px-4'>
              <li>Materi Dasar</li>
              <ul className='list-disc text-md font-thin mt-2 mb-3 px-4'>
                <li>Etik Legal Pelayanan Dialisis dan Transplantasi Ginjal</li>
                <li>Standar Kompetensi Perawat Dialisis</li>
              </ul>
              <li>Materi Inti</li>
              <ul className='list-disc text-md font-thin mt-2 mb-3 px-4'>
                <li>Menjelaskan Terapi Pengganti Ginjal</li>
                <li>Melakukan Asuhan Keperawatan Pre HD</li>
                <li>Melakukan Asuhan Keperawatan Intra HD</li>
                <li>Melakukan Asuhan Keperawatan Post HD</li>
                <li>Melakukan HD Dengan Kasus Khusus</li>
                <li>Melakukan Asuhan Keperawatan Masalah Jangka Panjang Pasien HD</li>
                <li>Melakukan Asuhan Keperawatan Pasien CAPD</li>
                <li>Melakukan Dialiser Reprocessing</li>
                <li>Melakukan Edukasi Pasien Dialisis dan Keluarga</li>
              </ul>
              <li>Materi Penunjang</li>
              <ul className='list-disc text-md font-thin mt-2 mb-3 px-4'>
                <li>BLC</li>
                <li>Standar Minimal Rekam Medik Unit Dialisis dan Indonesia Renal Registry (IRR)</li>
                <li>Water Treatment</li>
                <li>Anti Korupsi</li>
                <li>Rencana Tindak Lanjut</li>
              </ul>
              <li>Pelaksanaan Pelatihan</li>
              <ul className='list-disc text-md font-thin mt-2 mb-3 px-4'>
                <li>Pelatihan diadakan setahun 2 (dua) kali (Jadwal sewaktu waktu dapat berubah)</li>
                <li>Waktu Pelatihan dilaksanakan selama lebih kurang 3 atau 4 bulan (93 hari)</li>
                <li>Pelaksanaan Program Pelatihan meliputi perkuliahan, simulasi, praktek kerja lapangan dan diskusi kelompok</li>
                <li>Evaluasi Pre dan Post Pelatihan</li>
                <li>Evaluasi Uji Kompetensi CBP INNA</li>
              </ul>
              <li>Narasumber dan fasilitator</li>
              <ul className='list-disc text-md font-thin mt-2 mb-3 px-4'>
                <li>Staf Instalasi Hemodialisis RSKG Ny. R.A. Habibie</li>
                <li>Bidang Keperawatan RSKG Ny. R.A. Habibie</li>
                <li>Staf Pengajar dari Pernefri Jawa Barat</li>
                <li>Dokter Spesialis Anak</li>
                <li>Dokter Spesialis Bedah</li>
                <li>Staf Pengajar dari IPDI Jawa Barat</li>
              </ul>
            </ul>
            <p className='text-md'>
              C. Struktur Program </p>
            <Image
              src={struktur}
              blurDataURL={struktur}
              alt='latar belakang'
              className={style.image2}
            />
          </div>

          <Box className='ml-[7vw]'>
            <hr className='mb-10 mt-10' />
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
          </Box>
        </div>
      </div>
    </>
  )

}

export default PelatihanHD;
