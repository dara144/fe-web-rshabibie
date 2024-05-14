import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'

export default function useWilayah() {
  const [isError, setIsError] = useState(false)
  const [provinsi, setProvinsi] = useState([])
  const [idProvinsi, setIdProvinsi] = useState(null)
  const [kabupaten, setKabupaten] = useState([])
  const [idKabupaten, setIdKabupaten] = useState(null)
  const [kecamatan, setKecamatan] = useState([])
  const [searchValue, onSearchChange] = useState({ kabupaten: '', kecamatan: '' })
  const getProvinsi = async () => {
    try {
      const { data } = await axios.get('/wilayah/provinsi.json')
      const provinsi = data.map(data => ({ value: data.id, label: data.nama }))
      setProvinsi(provinsi)
    } catch (error) {
      setIsError(true)
    }
  }
  const getKabupaten = useCallback(async () => {
    try {
      onSearchChange({ kecamatan: '', kabupaten: '' })
      const { data } = await axios.get(`/wilayah/kabupaten/${idProvinsi}.json`)
      const kabupaten = data.map(data => ({ value: data.id, label: data.nama }))
      setKabupaten(kabupaten)
    } catch (error) {
      setIsError(true)
    }
  }, [idProvinsi])
  const getKecamatan = useCallback(async () => {
    try {
      onSearchChange(prev => ({ ...prev, kecamatan: '' }))
      const { data } = await axios.get(`/wilayah/kecamatan/${idKabupaten}.json`)
      const kecamatan = data.map(data => ({ value: data.id, label: data.nama }))
      setKecamatan(kecamatan)
    } catch (error) {
      setIsError(true)
    }
  }, [idKabupaten])

  useEffect(() => {
    getProvinsi()
  }, [])

  useEffect(() => {
    getKabupaten()
  }, [getKabupaten])

  useEffect(() => {
    getKecamatan()
  }, [getKecamatan])
  return { searchValue, onSearchChange, provinsi, kabupaten, kecamatan, setIdProvinsi, setIdKabupaten, isError }
}
