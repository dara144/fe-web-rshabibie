import { Group, NativeSelect, Text } from '@mantine/core'
import SelectDokter from '@modules/admin/component/SelectDokter'
import { BsChevronDown } from 'react-icons/bs'
import style from '../assets/navDokter.module.css'

export default function NavDokter() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.h2}>
          <div className='mt-5 mb-8 rounded-lg p-5 shadow-lg outline outline-1 outline-gray-200 lg:ml-[2vw] lg:mt-[27vh]'>
            <Group mb='3vh'>
              <Text className='m-auto text-xl font-semibold'>
                Informasi Jadwal <label className='text-cyan-500'>Dokter</label>
              </Text>
            </Group>
            <SelectDokter className='mx-8' name='ruanganDokterId' setImgURL={setImgURL} />
          </div>
        </div>
      </div>
    </>
  )
}