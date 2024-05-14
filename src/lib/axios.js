import axios from 'axios'
// import { useToken } from '@redux/token'
// import decode from 'jwt-decode'

const axi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API,
  validateStatus: status => status >= 200 && status < 300
})

export default axi
// axi.interceptors.request.use(
//   async config => {
//     const token = useToken.getState().token
//     const expire = useToken.getState().expire
//     console.log('date now :' + Date.now() + ' expire :' + expire * 1000)
//     if (!token || expire * 1000 < Date.now()) {
//       const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST_API}/user/token`, { withCredentials: true })
//       const payload = decode(res.data.accessToken)
//       useToken.setState({ token: res.data.accessToken, isLogin: true, expire: payload?.exp, name: payload?.name, role: payload?.role })
//     }

//     config.headers.Authorization = `Bearer ${useToken.getState().token}`
//     // config.headers.testAuth = 'test'

//     return config
//   },
//   error => Promise.reject(error)
// )
