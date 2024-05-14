import { createStore, setData } from '@lib/zustand'

export const initialState = {
  jadwal: [],
  message: '',
  namaDokter: 'Dokter',
  klinik: ''
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
  setMessage: 'setMessage'
}
