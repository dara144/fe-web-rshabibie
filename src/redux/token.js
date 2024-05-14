import { createStore } from '@lib/zustand'

const initialState = {
  token: null,
  expire: 0,
  name: null,
  role: null,
  isLogin: false,
  isError: false,
  errorMessage: null,
  isSuccess: false,
  successMessage: null
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'setToken':
      state.token = payload
      break
    case 'setIsLogin':
      state.isLogin = !state.isLogin
      break
    default:
      throw new Error('unknown action type on reducer')
  }
}

export const useToken = createStore(reducer, initialState, { name: 'token' })
