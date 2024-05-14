import { Button, Card, Col, Grid, Group, Table, Text, ThemeIcon } from '@mantine/core'
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
  const { jadwal, namaDokter } = useJadwalDokterPage(state => ({ jadwal: state.jadwal, message: state.message, namaDokter: state.namaDokter }), shallow)
  const { ref: myRef, inView: myImageIsVisible } = useInView()
  const rows = jadwal.map((data) => (
    <tr key={data.id}>
      <td>{data.hari.toUpperCase()}</td>
      <td>{data.jamMulai} - {data.jamSelesai}</td>
    </tr>
  ))

  useEffect(() => {
    useJadwalDokterPage.setState(initialState)
    return () => {
      useJadwalDokterPage.setState(initialState)
    }
  }, [])

  return (
    <>
      <Text className={style.h1}>Jadwal Dokter RSKG Ny. R.A. Habibie</Text>
      <main className={style.wrapper}>
        <Border />
        <Grid className='gap-5'>
          <Grid.Col sm={12} md={3} lg={3}>
            <div className='p-4 place-content-center rounded-xl overflow-visible shadow-lg outline outline-1 outline-gray-200 border-l-[20px] border-[#1E90FF] bg-white object-cover pl-5 shadow-x'>
              <Group mb='3vh'>
                <Text className='m-auto text-xl font-semibold'>
                  Informasi Jadwal <label className='text-[#1E90FF]'>Dokter</label>
                </Text>
              </Group>
              <SelectDokter className='mx-8' name='ruanganDokterId' setImgURL={setImgURL} />
            </div>
          </Grid.Col>
          <Grid.Col sm={12} md={3} lg={8}>
            <Grid className='gap-5 place-content-center'>
              <Grid.Col sm={12} md={3} lg={4}>
                <Card shadow="lg" p="lg" radius="md" withBorder>
                  <div className='text-center'>
                    <Image className={style.image}
                      width={150}
                      height={150}
                      src={imgURL}
                      alt="dokter"
                    />
                  </div>
                  <Text className={style.nama}>{namaDokter}</Text>
                  <Group className={style.group}>
                    <ThemeIcon size="md" variant="light">
                      <TbStethoscope size={16} color='#A5D8FF' />
                    </ThemeIcon>
                    {useJadwalDokterPage.getState().klinik}
                  </Group>

                  <Text size="sm" color="dimmed">
                    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                    activities on and around the fjords of Norway
                  </Text>
                </Card>
              </Grid.Col>
              <Grid.Col md={6} lg={5}>
                <Table>
                  <thead>
                    <tr>
                      <th>Hari</th>
                      <th>Jam</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows}
                  </tbody>
                </Table>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}

export default Dokter
