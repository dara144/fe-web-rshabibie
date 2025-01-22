import axi from '@lib/axios'
import { Select } from '@mantine/core'
import useSelectDokter from '../hooks/useSelectDokter'
import { useJadwalDokterPage, types } from '@modules/dokter/hooks/useDokter'
import { useState } from 'react'
/**
 * @param {Object} [props]
 * @param {"ruanganDokterId"|"id"} props.name
 * @param {Function} props.setImgURL
 */
export default function SelectDokter(props) {
  const { name = 'ruanganDokterId', setImgURL } = props
  const { ruangan, setIdRuang, idRuangDokter, setIdRuangDokter, dokter, searchDokter, setSearchDokter, isDisabled } =
    useSelectDokter(name, setImgURL)
  /**@type {Select['propTypes']} */
  const optSelect = {
    placeholder: 'Pilih Dokter',
    value: idRuangDokter,
    onChange: async id => {
      try {
        if (name == 'id') {
          setIdRuangDokter(id)
          const { data } = await axi.get(`dokter?id=${id}`)
          if (data.foto) setImgURL(`${process.env.NEXT_PUBLIC_HOST_API}/${data.foto}`)
          else setImgURL('/maleDoc.jpg')
        } else {
          setIdRuangDokter(id)
          const { data } = await axi.get(`dokter/ruangan-dokter/id?id=${id}`)
          const { data: dataDokter } = await axi.get(`dokter?id=${data.dokterId}`)
          if (dataDokter.foto) setImgURL(`${process.env.NEXT_PUBLIC_HOST_API}/${dataDokter.foto}`)
          else setImgURL('/maleDoc.jpg')
          const { data: jadwal } = await axi.get(`jadwal-dokter/?ruanganDokterId=${id}`)
          useJadwalDokterPage.setState({ jadwal })
          console.log(jadwal)
        }
      } catch (error) {
        useJadwalDokterPage.setState({ message: 'Gagal Mengambil Data Dokter' })
      }
    },
    searchValue: searchDokter,
    onSearchChange: data => {
      useJadwalDokterPage.setState({ namaDokter: data })
      setSearchDokter(data)
    },
    data: dokter,
    // disabled: isDisabled,
    searchable: true
  }
  const { klinik, dispatch } = useJadwalDokterPage()
  return (
    <>
      <div className='mb-3'>
        <label>Poliklinik</label>
        <Select
          placeholder='Pilih Ruangan'
          data={ruangan} // klinik
          onChange={setIdRuang}
          // searchValue={klinik}
          // onSearchChange={klinik => dispatch({ type: types.setKlinik, payload: klinik })}
          // disabled={isDisabled}
          // searchable
          required
        />
      </div>
      {/* <div className='mb-3'>
        <label>Dokter</label>
        <Select name={name} placeholder='Pilih Dokter' required {...optSelect} />
      </div> */}
    </>
  )
}
