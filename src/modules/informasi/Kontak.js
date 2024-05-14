import { Box, Button, Image, Text, Textarea, TextInput } from '@mantine/core'
import { IoIosCall, IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import style from './assets/Kontak.module.css'

function Kontak() {
  return (
    <>
      <main
        className={style.wrapper}
        style={{
          width: '85vw'
        }}>
        <div className='grid lg:grid-flow-col'>
          <div>
            <Text className={style.h1}>Hubungi Kami</Text>

            <Image className='mr-14 sm:hidden lg:block' src='/border.png' alt='border' width='21vw' />

            <div className='grid grid-cols-3 lg:hidden'>
              <Image src='/border.png' alt='border' />
              <Image src='/border.png' alt='border' />
              <Image src='/border.png' alt='border' />
            </div>
            <div className={style.h2}>
              <div className='mt-5 text-sm font-thin'>
                <MdLocationOn className='absolute h-4 w-4' /> <span className='ml-7 '>Jl. Tubagus Ismail No.46</span>
                <hr className='mr-16 mt-2 mb-2' />
                <IoIosCall className='absolute h-4 w-4' />
                <a className='hover:text-[#1E90FF]' href='tel:0222501985'>
                  <span className='ml-7 '>022-250-1985</span>
                </a>
                <hr className='mr-16 mt-2 mb-2' />
                <IoLogoWhatsapp className='absolute h-4 w-4' /> <span className='ml-7 '>0853 2002 3322</span>
                <hr className='mr-16 mt-2 mb-2' />
                <MdEmail className='absolute h-5 w-4' />
                <a className='underline hover:text-[#1E90FF]' href='mailto:info@rskghabibie.com'>
                  <span className='ml-7 '>info@rskghabibie.com</span>
                </a>
                <hr className='mr-16 mt-2 mb-2' />
              </div>
            </div>
          </div>

          <div>
            <Text className={style.h1}>Kirimkan Kami Pesan</Text>
            <div className='grid grid-cols-3'>
              <Image src='/border.png' alt='border' />
              <Image src='/border.png' alt='border' />
              <Image src='/border.png' alt='border' />
            </div>
            <Box sx={{ maxWidth: 800 }} mt='md'>
              <form>
                <div className='grid grid-cols-2 gap-10'>
                  <div>
                    <TextInput mb={20} label='Nama Pesan' required='*' />
                    <TextInput mb={20} label='Subjek Pesan' required='*' />
                    <TextInput
                      className={style.p}
                      label='Kode Verifikasi'
                      required='*'
                      placeholder='Ketik Tulisan Yang Ada Pada Gambar'
                      withAsterisk
                    />
                  </div>
                  <div>
                    <TextInput mb={20} label='Email Pesan' required='*' />
                    <Textarea label='Deskripsi Pesan' />
                  </div>
                </div>

                <Button
                  className='mt-4 mb-12 border border-[#1E90FF] bg-[#1E90FF] px-5 outline-[#1E90FF] hover:bg-white hover:text-[#1E90FF]  focus:outline-none focus:ring-2 focus:ring-offset-2'
                  type='submit'>
                  Submit
                </Button>
              </form>
            </Box>
          </div>
        </div>
      </main>
    </>
  )
}

export default Kontak
