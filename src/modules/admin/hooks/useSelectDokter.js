import axi from '@lib/axios'
import { useDidUpdate } from '@mantine/hooks'
import { useState, useEffect, memo } from 'react'
import { useJadwalDokter, types } from '../hooks/useJadwalDokter'
import instalasi from '../data/instalasi'
import { klinik, jadwalDokter } from '../../../data/jadwal'
import { useJadwalDokterPage } from '../../dokter/hooks/useDokter'
export default function useSelectDokter(name, setImgURL) {
  const [ruangan, setRuangan] = useState(Object.values(klinik).map(klinik => ({ value: klinik, label: klinik })))
  const [idRuang, setIdRuang] = useState(null)
  const [idRuangDokter, setIdRuangDokter] = useState(null)
  const [dokter, setDokter] = useState([])
  const [searchDokter, setSearchDokter] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const dispatch = useJadwalDokter(state => state.dispatch)
  const getRuangan = async () => {
    try {
      setIsDisabled(true)
      const { data } = await axi.get(`ruangan/?idInstalasi=${instalasi.rawatJalan}`)
      const ruangan = data.map(dt => ({ value: dt.id, label: dt.nama }))
      setRuangan(ruangan)
      setIsDisabled(false)
    } catch (error) {
      dispatch({ type: types.onErrorFetch, payload: 'NET ERROR: Tidak Dapat Mengakses Daftar Ruangan' })
    }
  }
  const getDokter = async () => {
    try {
      setSearchDokter('')
      // const { data } = await axi.get(`dokter/ruangan-dokter?instalasi=${instalasi.rawatJalan}&ruangan=${idRuang}`)
      // const dokter = data.map(dt => ({ value: name == 'id' ? dt.dokterId : dt.id, label: dt.dokter.nama }))
      const dokter_ = jadwalDokter.filter(jadwal => jadwal.klinik == idRuang)
      console.log('🚀 ~ dokter_:', dokter_)
      const dokter = dokter_.map(jadwal => ({ value: jadwal.nama, label: jadwal.nama }))
      setDokter(dokter).setIsDisabled(false)
    } catch (error) {
      setIsDisabled(true)
      dispatch({ type: types.onErrorFetch, payload: 'NET ERROR: Tidak Dapat Mengakses Daftar Dokter' })
    }
  }
  // useEffect(() => {
  //   getRuangan()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  useDidUpdate(() => {
    // getDokter()
    useJadwalDokterPage.setState({ jadwalDokter: jadwalDokter.filter(jadwal => jadwal.klinik == idRuang) })
  }, [idRuang])

  return { ruangan, setIdRuang, idRuangDokter, setIdRuangDokter, dokter, searchDokter, setSearchDokter, isDisabled }
}
