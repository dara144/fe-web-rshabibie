import { TimeRangeInput } from '@mantine/dates'
import { Select, Button, Text } from '@mantine/core'
import { useJadwalDokter, types as type } from '@modules/admin/hooks/useJadwalDokter'
import SelectDokter from '../component/SelectDokter'
import { cb, shallow } from '@lib/zustand'
import days from '@modules/admin/data/days'
import { createJadwalDokter } from '@modules/admin/services/jadwalDokter.service'
import AdminNav from '@layout/AdminNav'
import style from '../assets/JadwalDokter.module.css'
function CreateJadwalDokter() {
  const { message, isError, isLoading } = useJadwalDokter(state => state.onSubmit, shallow)
  const imgURL = useJadwalDokter(state => state.imgURL)
  const dispatch = useJadwalDokter(state => state.dispatch)

  return (
    <>
      <div className={style.bg}>
        <AdminNav />
        <div className={style.wrapper}>
          <Text className={style.h1}>Create Jadwal Dokter</Text>
          <form
            onSubmit={createJadwalDokter(dispatch)}
            method={'post'}
            encType={'multipart/form-data'}
            className='p-4 mr-48 gap-10 place-content-center rounded-xl overflow-visible border-l-[20px] border-cyan-500 bg-white object-cover pl-5 shadow-x'>
            {message && <h2 className={isError ? 'text-error' : 'text-success'}>{message}</h2>}
            <SelectDokter />
            <div className='mb-3'>
              <label>hari</label>
              <Select name='hari' placeholder='Pilih Hari' data={days} searchable />
            </div>
            <div className='mb-3'>
              <label>Jam Mulai - Selesai</label>
              <TimeRangeInput format='12' onChange={cb(type.setTimes, dispatch)} required />
            </div>
            <Button type='submit' className='bg-primary hover:bg-primary-focus' loading={isLoading}>
              Submit
            </Button>
          </form>
        </div>
      </div>
   </>
  )
}
export default CreateJadwalDokter
