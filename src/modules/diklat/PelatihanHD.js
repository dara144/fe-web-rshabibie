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
      <div className={style.h2}>
        <Box className='ml-[7vw]'>
          <Title className='text-2xl font-bold mt-10'>Latar <label className={style.h3}>Belakang</label></Title>
          <p className='text-md mt-5 mr-3 font-thin'>Jumlah Penderita Gagal Ginjal yang memerlukan tindakan dialisis setiap tahun terus meningkat. Untuk memenuhi kebutuhan pelayanan ini, pendirian unit unit dialisis di sarana pelayanan kesehatan pemerintah dan swasta terus meningkat sehingga dibutuhkan tenaga perawat, dokter dan teknisi yang mempunyai keahlian di bidang dialisis. Pelayanan dialisis yang berkualitas ditentukan oleh sumber daya manusia berdasarkan kompetensinya untuk menurunkan morbiditas dan mortalitas pasien dialisis.
            <br />
            <br />
            Berkenaan dengan hal tersebut Rumah Sakit Khusus Ginjal Ny. R.A. Habibie Bandung, bekerja sama dengan Pernefri Korwil Jawa Barat dan RS. Hasan Sadikin Bandung, menyelenggarakan Pelatihan Dialisis untuk tenaga perawat dan dokter umum.
            <br />
            <br />
            Pelatihan Dialisis dilaksanakan 2 (dua) kali dalam setahun dengan tenaga pengajar yang terdiri dari para pakar yang berkompeten di bidangnya, dan telah meluluskan lebih dari 1300 orang tenaga ahli dialisis yang terdiri dari perawat, dokter umum, dokter spesialis penyakit dalam dan teknisi dari seluruh Indonesia. <ActiveLink activeClassName={'text-primary'} href='https://drive.google.com/file/d/15m7GJ2nb21jS6UgNk6Pt9y4zbWttKQKX/view?usp=sharing'>
              <a className='text-[#1E90FF] italic'>Lihat brosur pelatihan HD disini.</a>
            </ActiveLink>
          </p>
        </Box >

        <div className={style.bg}>
          <br />
          <div className={style.wrapper}>
            <Title className='text-xl mb-3 font-bold'>Tujuan <label className={style.h3}>Pelatihan</label></Title>
            <p className='text-md'>
              A. Tujuan Umum</p>
            <p className='text-md mt-2 mr-3 font-thin'>Setelah mengikuti pelatihan ini peserta mampu  memberikan asuhan keperawatan dialisis di Rumah Sakit (RS) dan Klinik Khusus Dialisis sesuai dengan kewenangannya.</p>
            <p className='text-md mt-5'>
              B. Tujuan Khusus</p>
            <br />
            <label className='text-md mt-2 mr-3 font-thin'>Setelah mengikuti Pelatihan ini peserta mampu:
              <ul className='list-decimal text-md mt-2 font-thin px-12'>
                <li>Menjelaskan Terapi Pengganti Ginjal</li>
                <li>Melakukan Asuhan Keperawatan Pre HD</li>
                <li>Melakukan Asuhan Keperawatan Intra HD</li>
                <li>Melakukan Asuhan Keperawatan Post HD</li>
                <li>Melakukan HD Khusus</li>
                <li>Melakukan Asuhan Keperawatan Masalah Jangka Panjang Pasien HD</li>
                <li>Melakukan Asuhan Keperawatan Pasien CAPD</li>
                <li>Melakukan Dialiser Reprocessing</li>
                <li>Melakukan Edukasi Pasien Dialisis dan Keluarga</li>
              </ul>
            </label>
            <label className='text-md mt-5'>
              C. Sturktur Program</label>
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

              <ActiveLink href='mailto:pelatihandialisis@yahoo.com'>
                <a className='underline hover:text-[#1E90FF] relative'>
                  <MdEmail className='absolute h-5 w-4 top-[0px]' /> <span className='ml-7 '>pelatihandialisis@yahoo.com</span>
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
