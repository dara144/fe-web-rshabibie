import { Box, Button, List, Title } from '@mantine/core'
import style from './assets/ProfilDiklat.module.css'
import ActiveLink from '@component/ActiveLink';
import { useHover } from '@mantine/hooks';
import { MdEmail, MdKeyboardArrowRight, MdLocationOn } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import diklat from '../diklat/assets/image/Diklat2.jpg';
import VisiMisi from '../diklat/assets/image/visimisirs.jpeg';
import komitmen from '../diklat/assets/image/komitmendiklat.jpeg';
import pelatihanDiklat from '../diklat/assets/image/ProfilDiklat.jpg';
import Image from 'next/future/image';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { IoIosCall } from 'react-icons/io';

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
              <li>Pendidikan dan Pelatihan Teknik Dialisis untuk Dokter Penyakit Dalam, Dokter Umum, Perawat dan Teknisi.</li>
              <li>Diselenggarakan 2 kali setahun pada bulan Maret dan Oktober.</li>
              <li>Tim Pengajar : Nefrolog, Ahli Bedah Vaskuler, Apoteker, Manajer, Perawat dan Teknisi yang berpengalaman.</li>
            </ul>

            <ActiveLink activeClassName={'text-primary'} href='https://diklat.rskghabibie.com/'>
              <a ref={ref} className='relative block group'>
                <Button className='px-8 mt-5 mb-4 bg-[#1E90FF] hover:bg-white rounded-xl border border-[#1E90FF] hover:text-[#1E90FF] outline-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-offset-2' type='submit'>
                  {hovered && <MdKeyboardArrowRight className='absolute z-10 right-3 text-lg  text-[#1E90FF]' />}
                  Kunjungi Website Diklat
                </Button>
              </a>
            </ActiveLink>
          </Box>
        </div>
      </div>

      <div className={style.bg}>
        <br />
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
            <Box className='mr-[7vw] mb-[2vh] ml-14 mt-10 lg:mt-20'>
              <label className='text-xl mb-3 font-bold'>
                Kegiatan Unit <b className={style.h3}>Pendidikan Dan Pelatihan</b></label>
              <ul className='list-decimal text-md mt-3 font-thin px-12'>
                <li>Pelatihan dialisis bagi perawat yang dilaksanakan dua kali setiap tahunnya</li>
                <li>Peningkatan kompetensi tenaga kesehatan dengan In House Training, Webinar, Simposium, dan workshop</li>
              </ul>
              <br />
              <br />
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

                  <ActiveLink href='mailto:pelatihandialisis@yahoo.com'>
                    <a className='underline hover:text-[#1E90FF] relative'>
                      <MdEmail className='absolute h-5 w-4 top-[0px]' /> <span className='ml-7 '>pelatihandialisis@yahoo.com</span>
                      <hr className='mr-16 mt-2' />
                    </a>
                  </ActiveLink>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>

    </>
  )

}

export default ProfilDiklat;
