import { Box, Grid } from "@mantine/core"
import Image from "next/future/image";
import style from '../assets/MCU.module.css'
import mcu from '../assets/image/mcu.jpg'
import { FiCheckSquare } from "react-icons/fi"
import { useInView } from "react-intersection-observer";

export default function PelayananMCU() {
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  return (
    <>
      {/* Pelayanan MCU */}
      <div className="overflow-clip">
        <Grid className='ml-[7vw] w-[85vw] mt-16'>
          <Grid.Col sm={12} lg={7} xl={7}>
            <Box className='mr-10 lg:mt-5'>
              <p className='text-lg mt-3 font-normal'>Pelayanan Lainnya :</p>
              <div className='flex text-md font-thin relative'>
                <FiCheckSquare className='text-green-600 text-xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                <label className='pl-16 mt-3'>Swab PCR SARS CoV-2</label>
              </div>
              <div className='flex text-md font-thin relative'>
                <FiCheckSquare className='text-green-600 text-xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                <label className='pl-16 mt-3'>Swab antigen SARS CoV-2 </label>
              </div>
              <div className='flex text-md font-thin relative'>
                <FiCheckSquare className='text-green-600 text-xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                <label className='pl-16 mt-3'>Hepatitis B</label>
              </div>
              <div className='flex text-md font-thin relative'>
                <FiCheckSquare className='text-green-600 text-xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                <label className='pl-16 mt-3'>Anti HCV</label>
              </div>
              <div className='flex text-md font-thin relative'>
                <FiCheckSquare className='text-green-600 text-xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                <label className='pl-16 mt-3'>Vitamin D3</label>
              </div>
              <div className='flex text-md font-thin relative'>
                <FiCheckSquare className='text-green-600 text-xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                <label className='pl-16 mt-3'>Narkotika dan Zat Adiktif (NAPZA)</label>
              </div>
              <div className='flex text-md font-thin relative'>
                <FiCheckSquare className='text-green-600 text-xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                <label className='pl-16 mt-3'>Golongan Darah</label>
              </div>
              <div className='flex text-md font-thin relative'>
                <FiCheckSquare className='text-green-600 text-xl font-bold rounded-full h-12 absolute z-10 left-5 top-1.2 right-0' />
                <label className='pl-16 mt-3'>Echocardiologi (USG Jantung)</label>
              </div>
            </Box>
          </Grid.Col>
          <Grid.Col sm={12} lg={5} xl={5}>
            <div
              ref={myRef}
            >
              <Image
                src={mcu}
                className={`${style.image} ${myImageIsVisible ? style.animateShowImage : style.animateHiddenImage}`}
                alt='mcu'
              />
            </div>
          </Grid.Col>
        </Grid>

        {/* Jam Pelayanan */}
        <div className='mx-[7vw] mt-8'>
          <label className='font-thin'>
            <label className='text-red-500'>*</label> Pemeriksaan NAPZA bila memerlukan surat keterangan bebas NAPZA dan surat keterangan pemeriksaan kesehatan rohani (mental) bisa konsul dengan dokter psikiater.
          </label>
          <br />
          <label className='font-thin'>
            <label className='text-red-500'>*</label> Pemeriksaan Echocardiologi (USG Jantung) bisa konsul dengan dokter spesialis jantung.
          </label>
        </div>
        <hr className='mb-10 mt-10' />
        <div className='ml-[7vw]'>
          <label className='text-lg font-normal'>Jam Pelayanan <span className='text-[#1E90FF]'>MCU :</span></label>
          <ul className='list-none mb-5 font-thin'>
            <li>Senin - Jumat, Pukul 08.00-14.00 WIB</li>
            <li>Sabtu sesuai perjanjian</li>
          </ul>

          <label className='text-lg font-normal'>Jam Pelayanan <span className='text-[#1E90FF]'>Pemeriksaan NAPZA :</span></label>
          <ul className='list-none mb-5 font-thin'>
            <li>Selasa - Kamis, Pukul 15.00 WIB</li>
          </ul>

          <label className='text-lg font-normal'>Jam Pelayanan Pemeriksaan <span className='text-[#1E90FF]'>Echocardiologi (USG Jantung) :</span></label>
          <ul className='list-none mb-5 font-thin'>
            <li>Sabtu</li>
          </ul>
        </div>
      </div>
    </>
  )
} 