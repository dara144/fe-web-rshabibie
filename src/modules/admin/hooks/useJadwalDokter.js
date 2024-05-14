import { createStore, setData } from '@lib/zustand'

export const initialState = {
  onSubmit: {
    isLoading: false,
    isError: false,
    message: ''
  },
  times: [null, null],
  imgURL: null
}
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.onSubmit:
      state.onSubmit = payload
      state.onSubmit.isLoading = false
      break
    case types.setImgURL:
      const imgURL = URL.createObjectURL(payload.target.files[0])
      state.imgURL = imgURL
      break
    case types.onErrorFetch:
      state.onSubmit.isError = true
      state.onSubmit.message = payload
      break
    case types[type]:
      setData({ state, type, payload, initialState })
      break
    default:
      throw new Error('unknown action type on reducer')
  }
}

/**
 * @type {{setImgURL:VoidFunction}}*/
const setState = set => ({
  setImgURL: args => set({ imgURL: args }, false, { type: 'setImgUrl' })
})
// export const useJadwalDokter = createStore(reducer, initialState, { name: 'jadwalDokter' })
export const useJadwalDokter = createStore(initialState, reducer, setState)
export const types = {
  onSubmit: 'onSubmit',
  setIsLoading: 'setIsLoading',
  setTimes: 'setTimes',
  setImgURL: 'setImgURL',
  onErrorFetch: 'onErrorFetch'
}

// /**
//  * @param {'onSubmit'|'times'|'imgURL'} prop
//  */
// export const getState =
//   prop =>
//   /**
//    * @return {initialState}
//    */
//   state =>
//     prop ? state[prop] : state
// // export const getState = (state = initialState) => (delete state.dispatch, state)
