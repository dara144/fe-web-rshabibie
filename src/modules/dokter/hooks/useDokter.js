import { createStore, setData } from '@lib/zustand'
import { jadwalDokter } from '../../../data/jadwal'

export const initialState = {
  // jadwal: [],
  jadwalDokter: jadwalDokter
  // message: '',
  // namaDokter: 'Dokter',
  // klinik: ''
}
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types[type]:
      setData({ state, type, payload, initialState })
      break
    default:
      throw new Error('unknown action type on reducer')
  }
}
export const useJadwalDokterPage = createStore(initialState, reducer)
export const types = {
  setJadwal: 'setJadwal',
  setJadwalDokter: 'setJadwalDokter',
  setKlinik: 'setKlinik',
  setMessage: 'setMessage'
}
