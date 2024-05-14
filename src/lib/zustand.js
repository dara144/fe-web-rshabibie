import create from 'zustand'
import { devtools, combine, redux, persist, StateStorage, PersistOptions } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import Cookies from 'js-cookie'

export { default as shallow } from 'zustand/shallow'
export const cb = (type, dispatch) => payload => dispatch({ type, payload })
/**
 * @function
 * @template T,R
 * @template {{dispatch: (args:{type:string,payload:any})=>void}} S
 * @param {R} setState
 * @param {T} initialState
 * @return {import('zustand').UseBoundStore<import('zustand').StoreApi<Write<T,S>>>}
 */
export const createStore = (initialState, reducer, setState) =>
  create(
    devtools(
      immer(
        combine(initialState, set => ({
          dispatch: args => set(state => reducer(state, args), false, { type: args?.type, payload: args?.payload }),
          ...(setState && setState(set))
        }))
      ),
      { ...(process.env.NODE_ENV === 'production' && { enabled: false }) }
    )
  )
/** @type {StateStorage} */
const storage = {
  getItem: name => Cookies.get(name),
  setItem: (name, value) => Cookies.set(name, value, { expires: 1, sameSite: 'Lax' }),
  removeItem: name => Cookies.remove(name)
}

/**
 * @function
 * @template T
 * @template {{dispatch: (args:{type:string,payload:any})=>void}} S
 * @param {T} initialState
 * @param {Function} reducer
 * @param {Object} [options] - { name, storage } name is the name of the cookie, storage is true if you want to use localStorage
 * @param {String} options.name - WAJIB
 * @param {Boolean} [options.storage] - default false
 * @param {"local"|"session"|"cookies"} [options.storageType] - default "cookies"
 * @return {import('zustand').UseBoundStore<import('zustand').StoreApi<Write<T,S>>>}
 */
export const createPersistStore = (initialState, reducer, options) => {
  /**@type {PersistOptions} */
  const config = {
    ...(options?.name && { name: options.name }),
    getStorage: () => (options?.storageType == 'session' ? sessionStorage : options?.storageType == 'local' ? localStorage : storage),
    serialize: state => Buffer.from(JSON.stringify(state)).toString('base64'),
    deserialize: state => JSON.parse(Buffer.from(state, 'base64').toString('utf8'))
  }
  return create(
    devtools(
      persist(
        immer(
          combine(initialState, set => ({
            dispatch: args => set(state => reducer(state, args), false, { type: args?.type, payload: args?.payload })
          }))
        ),
        config
      ),
      { ...(process.env.NODE_ENV === 'production' && { enabled: false }) }
    )
  )
}
/**
 * @description untuk type yang diawali dengan set
 * dan nama property pada initialstate harus sama setelah set
 */
export const setData = ({ state, type, payload, initialState }) => {
  type = type.replace(/^set/, '').replace(/^\w/, c => c.toLowerCase()) // setNamaBelakang => NamaBelakang  // NamaBelakang => namaBelakang
  for (const key in initialState) {
    if (key === type) {
      state[key] = payload
      break
    }
    if (typeof initialState[key] === 'object') stateNested({ initialState, key, type, state, payload })
  }
  return state
}

const stateNested = ({ initialState, key, type, state, payload }) => {
  for (const key2 in initialState[key]) {
    if (key2 === type) {
      state[key][key2] = payload
      break
    }
    if (typeof initialState[key][key2] === 'object') stateNested({ initialState: initialState[key], key: key2, type, state: state[key], payload })
  }
  return state
}

/**
 * @param {Function} reducer
 * @param {{any}} initialState - Object to be used as initial state
 * @param {Object} [options] - { name, storage } name is the name of the cookie, storage is true if you want to use localStorage
 * @param {String} options.name - WAJIB
 * @param {Boolean} [options.storage] - default false
 * @param {"local"|"session"|"cookies"} [options.storageType] - default "cookies"
 */
// export const createStore2 = (reducer, initialState, options) => {
//   // initialState._hasHydrated = false

//   /** @type {StateStorage} */
//   const storage = {
//     getItem: name => Cookies.get(name),
//     setItem: (name, value) => Cookies.set(name, value, { expires: 1, sameSite: 'Lax' }),
//     removeItem: name => Cookies.remove(name)
//   }

//   /**@type {PersistOptions} */
//   const config = {
//     ...(options?.name && { name: options.name }),
//     getStorage: () => (options?.storageType == 'session' ? sessionStorage : options?.storageType == 'local' ? localStorage : storage),
//     serialize: state => Buffer.from(JSON.stringify(state)).toString('base64'),
//     deserialize: state => JSON.parse(Buffer.from(state, 'base64').toString('utf8')),
//     partialize: state => {
//       const { _hasHydrated, ...rest } = state
//       return rest
//     }
//     // onRehydrateStorage: () => state => {
//     //   if (options?.storage) {
//     //     const storage = config.getStorage()
//     //     const key = config.name
//     //     const value = storage.getItem(key)
//     //     if (value) state._hasHydrated = true
//     //   }
//     // }
//   }

//   let use = immer(redux(reducer, initialState))
//   options?.storage && (use = persist(use, config))
//   process.env.NODE_ENV === 'development' && (use = devtools(use, { name: options?.name }))
//   return create(use)
// }

// const log = config => (set, get, api) =>
//   config(
//     (...args) => {
//       console.log('  applying', args)
//       set(...args)
//       console.log('  new state', get())
//     },
//     get,
//     api
//   )

// const tes = (set, get, api) => {
//   ;((set, get, api) => {
//     api.subscribe(() => {
//       console.log('  new state', get())
//     })
//   })(() => set(), get, api)
// }
