import { createStore, setData } from '@lib/zustand'

export const initialState = {
  count: 0,
  name: 'namae',
  alamat: { kota: '', jalan: '', rumah: { no: '', rukun: { rt: '', rw: '' } } },
  isRender: false
}
const reducer = (state, { type: acType, payload }) => {
  switch (acType) {
    case type.increase:
      state.count++
      break
    case type.decrease:
      state.count--
      break
    case type.setRender:
      state.isRender = !state.isRender
      break
    case type[acType]:
      setData({ state, acType, payload, initialState })
      break
    default:
      throw new Error('unknown action type on reducer')
  }
}
export const useCount = createStore(reducer, initialState, { name: 'count', storage: true })
export const type = {
  increase: 'increase',
  decrease: 'decrease',
  setKota: 'setKota',
  setCount: 'setCount',
  setJalan: 'setJalan',
  setRt: 'setRt',
  setRender: 'setRender'
}
export const dataCount = ({ count, name, alamat }) => ({
  count,
  name,
  rt: alamat.rumah.rukun.rt
})
