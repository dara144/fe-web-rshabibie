import { Box, Title } from '@mantine/core'
import style from './assets/PelatihanCAPD.module.css'
import ActiveLink from '@component/ActiveLink'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import 'animate.css'
import { IoIosCall, IoLogoWhatsapp } from 'react-icons/io'
import CarouselPelatihanCAPD from './component/CarouselPelatihanCAPD'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

function PelatihanCAPD() {
  return (
    <>
      <CarouselPelatihanCAPD />
      <div className={style.h2}>
        <Box className='ml-[7vw]'>
          <Title className='text-2xl font-bold mt-10'>Latar <label className={style.h3}>Belakang</label></Title>
          <p className='text-md mt-5 mr-3 font-thin'>Pelayanan <i>Continous Ambulatory Peritoneal Dialysis</i> (CAPD) merupakan salah satu upaya pemerintah dalam upaya mendekatkan akses dan meningkatkan mutu pelayanan kesehatan cuci darah dan mengatasi keterbatasan tenaga kesehatan (perawat, dokter dan dokter spesialis subspesialis) serta ketersedian mesin dan saranauci darah ( Hemodialysis / HD ) maka pelayanan CAPD merupakan salah satu upaya yang dapat dilakukan.
            <br />
            <br />
            Pada tahun 2015 Komisi <i>Health Technology Assessment</i> (HTA) melakukan studi tentang <i>cost effective</i> antara HD dan CAPD dan rekomendasi dari hasil studi itu bahwa terapi CAPD lebih <i>cost effective dibandingkan HD</i>.
            <br />
            <br />
            Di sisi lain jumlah perawat yang mahir CAPD pun masih sangat terbatas sehingga diperlukan pelatihan CAPD bagi perawat untuk memberikan pelayanan yang bermutu dan berkualitas.
          </p>
        </Box >
      </div>

      <div className={style.bg}>
        <br />
        <div className={style.wrapper}>
          <Title className='text-xl mb-3 font-bold'>Materi <label className={style.h3}>Pelatihan CAPD</label></Title>
          <p className='text-md'>
            A. Tujuan Umum</p>
          <p className='text-md ml-5 mt-1 mb-3 font-thin'>Setelah mengikuti pelatihan ini peserta mampu melakukan asuhan keperawatan pada pasien CAPD.</p>

          <p className='text-md'>
            B. Tujuan Khusus </p>
          <p className='text-md ml-5 mt-1 font-thin'>Setelah mengikuti pelatihan ini peserta mampu :</p>
          <ul className='list-decimal text-md mt-1 font-thin px-12'>
            <li>Menjelaskan konsep CAPD.</li>
            <li>Melakukan penatalaksanaan akses pada pasien CAPD.</li>
            <li>Melakukan asuhan keperawatan pada pasien CAPD.</li>
          </ul>

          <p className='text-md ml-5 mt-3'>I. Materi Pelatihan</p>
          <p className='text-md ml-5 mt-1 font-thin'>Pada pelatihan akan disampaikan materi dasar yang terdiri dari materi sebagai berikut :</p>
          <ul className='list-decimal text-md mt-3 font-thin px-12'>
            <li>Terapi Pengganti Ginjal.</li>
            <li>Regulasi Penatalaksanaan CAPD.</li>
            <li>PKB dan Kompetensi Perawat Dialisis.</li>
            <li>Fisiologi Peritoneum dan Transport Molekul pada Peritoneal Dialysis (PD).</li>
          </ul>

          <p className='text-md ml-5 mt-3'>II. Materi Inti</p>
          <ul className='list-decimal text-md mt-3 font-thin px-12'>
            <li>Konsep CAPD.</li>
            <li>Akses Pada Pasien CAPD.</li>
            <li>Asuhan Keperawatan Pada Pasien CAPD.</li>
          </ul>

          <p className='text-md ml-5 mt-3'>III. Materi Penunjang</p>
          <ul className='list-decimal text-md mt-3 font-thin px-12 mb-10'>
            <li>Pendokumentasian CAPD.</li>
            <li>Building Learning Commitment (BLC).</li>
            <li>Rencana Tindak Lanjut (RTL).</li></ul>
        </div>
      </div>

      <Box className='ml-[7vw]'>
        <div className={style.h2}>
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
        </div>
      </Box>
      <br />
    </>
  )

}

export default PelatihanCAPD;
