import { Button, Card, Col, Flex, Grid, Group, Table, Text, ThemeIcon } from '@mantine/core'
import style from './assets/DokterSpesialis.module.css'
import Border from '@component/border'
import SelectDokter from '@modules/admin/component/SelectDokter'
import { useEffect, useState } from 'react'
import { useJadwalDokterPage, initialState } from '@modules/dokter/hooks/useDokter'
import { useInView } from 'react-intersection-observer'
import shallow from 'zustand/shallow'
import Image from 'next/image'
import { TbStethoscope } from 'react-icons/tb'

function Dokter() {
  const [imgURL, setImgURL] = useState('/maleDoc.jpg')
  const { jadwalDokter, namaDokter } = useJadwalDokterPage(
    state => ({ jadwalDokter: state.jadwalDokter, message: state.message, namaDokter: state.namaDokter }),
    shallow
  )
  console.log(jadwalDokter)
  const { ref: myRef, inView: myImageIsVisible } = useInView()

  useEffect(() => {
    useJadwalDokterPage.setState(initialState)
    return () => {
      useJadwalDokterPage.setState(initialState)
    }
  }, [])
  const GridColCardDokter = () => {
    return jadwalDokter.map(data => (
      <Grid.Col key={data.id} sm={12} md={3} lg={4}>
        <Card className='h-[450px]' shadow='lg' p='lg' radius='md' withBorder>
          <div className='text-center'>
            <Image className='rounded-full' width={200} height={200} src={`/dokter/${data.image}`} alt='dokter' />
          </div>
          <Flex direction={'column'} gap={5}>
            <Text ta={'center'} fw={'bold'} fz={'lg'}>
              {data.nama}
            </Text>

            <Flex justify='center'>
              <ThemeIcon size='md' variant='light'>
                <TbStethoscope size={16} color='#1E90FF' />
              </ThemeIcon>
              <Text c={'#1E90FF'} fz={'sm'} ta={'center'}>
                {data.klinik}
              </Text>
            </Flex>
            <Grid.Col>
              <Table>
                <thead>
                  <tr>
                    <th>Hari</th>
                    <th>Jam</th>
                  </tr>
                </thead>
                <tbody>
                  {data.jadwal.map(jadwal => (
                    <tr key={jadwal.id}>
                      <td>{jadwal.hari}</td>
                      <td>{`${jadwal.jamMulai} - ${jadwal.jamSelesai}`}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Grid.Col>
          </Flex>
          {/* <Text size='sm' color='dimmed'>
                    With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on
                    and around the fjords of Norway
                  </Text> */}
        </Card>
      </Grid.Col>
    ))
  }
  return (
    <>
      <Text className={style.h1}>Jadwal Dokter RSKG Ny. R.A. Habibie</Text>
      <main className='mx-10 mb-5'>
        <Border />
        <Grid grow>
          <Grid.Col sm={12} md={3} lg={3}>
            <div className='shadow-x flex flex-col place-content-center overflow-visible rounded-xl border-l-[20px] border-[#1E90FF] bg-white object-cover p-4 pl-5 shadow-lg outline outline-1 outline-gray-200'>
              <Group mb='3vh'>
                <Text className='m-auto text-xl font-semibold'>
                  Informasi Jadwal <label className='text-[#1E90FF]'>Dokter</label>
                </Text>
              </Group>
              <SelectDokter className='mx-8' name='ruanganDokterId' setImgURL={setImgURL} />
              <Flex align={'center'}>
                <span className='font-semibold text-gray-400'>*</span>
                <p className='mt-5 rounded-md p-3 text-gray-400'>
                  Jadwal sewaktu-waktu dapat berubah, konfirmasi ke kontak yang tercantum pada website.
                </p>
              </Flex>
            </div>
          </Grid.Col>
          <Grid.Col sm={12} md={3} lg={7}>
            <Grid>
              <GridColCardDokter />
            </Grid>
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}

export default Dokter
