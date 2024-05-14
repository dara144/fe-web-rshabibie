import axi from '@lib/axios'
import { Button, Grid, Text } from '@mantine/core'
import { useState } from 'react'
import SelectDokter from '../component/SelectDokter'
import style from '../assets/JadwalDokter.module.css'
import AdminNav from '@layout/AdminNav'

export default function UpdateDokter() {
  const [{ message, isError }, setResponse] = useState({ isError: false, message: '' })
  const [imgURL, setImgURL] = useState(null)
  /**@param {import('react').ChangeEvent<HTMLInputElement>} e */
  const onChange = e => {
    const img = URL.createObjectURL(e.target.files[0])
    setImgURL(img)
  }
  /**@param {import('react').ChangeEvent<HTMLInputElement>} e */
  const onSelectedDocter = e => {
    try {
      console.log(e)
    } catch (error) { }
  }
  /**@param {import('react').FormEvent<HTMLFormElement>} e */
  const onSubmit = async e => {
    e.preventDefault()
    try {
      const formData = new FormData(e.target)
      await axi.put('dokter', formData)
      setResponse({ isError: false, message: 'Data Berhasil Disimpan!' })
    } catch (error) {
      setResponse({ isError: true, message: 'Data Gagal Disimpan!' })
    } finally {
      setTimeout(() => {
        setResponse({ isError: false, message: '' })
      }, 3000)
    }
  }
  return (
    <>
      <div className={style.bg}>
        <AdminNav />
        <div className={style.wrapper}>
          <Text className={style.h1}>Update Jadwal Dokter</Text>
          <form onSubmit={onSubmit} encType={'multipart/form-data'}>
            <Grid className='p-4 gap-10 place-content-between rounded-xl overflow-visible border-l-[20px] border-cyan-500 bg-white object-cover pl-5 shadow-x'>
              <Grid.Col md={6} lg={5.5}>
                <SelectDokter name='id' setImgURL={setImgURL} />
                <Button type='submit' className='bg-primary hover:bg-primary-focus mt-3'>
                  Submit
                </Button>
              </Grid.Col>
              <Grid.Col md={6} lg={4}>
                <div className='mr-12 mt-5'>
                  <input type='file' name='foto' onChange={onChange} />
                  <img className='mt-5' width={200} src={imgURL} alt='' />
                </div>
              </Grid.Col>
            </Grid>
            <div className='mt-5'>
              {message && <h2 className={isError ? 'text-error' : 'text-success'}>{message}</h2>}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
