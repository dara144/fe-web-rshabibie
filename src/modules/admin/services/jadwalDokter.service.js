import axi from '@lib/axios'
import { useJadwalDokter, types, initialState } from '../hooks/useJadwalDokter'
import { showNotification, updateNotification } from '@mantine/notifications'
import { v4 as uuid } from 'uuid'
export const createJadwalDokter = dispatch => async e => {
  e.preventDefault()
  dispatch({ type: types.setIsLoading, payload: true })
  const selectedDay = e.target.querySelector('[name="hari"]').value
  const payload = { ...initialState.onSubmit }
  const notifId = uuid()
  try {
    showNotification({
      id: notifId,
      loading: true,
      title: 'Loading your data',
      message: 'Data will be created in seconds',
      autoClose: false
    })
    const formData = new FormData(e.target)
    /** @type {Date[]} */
    const dates = useJadwalDokter.getState().times
    const [jamMulai, jamSelesai] = dates.map(time => {
      if (time == undefined) throw { timeIsError: true }
      return time.toLocaleTimeString(['en-US'], { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' })
    })
    formData.append('jamMulai', jamMulai)
    formData.append('jamSelesai', jamSelesai)
    await axi.post('jadwal-dokter', formData)
    payload.message = 'Data Berhasil Disimpan'
  } catch (error) {
    payload.message = 'Data Gagal Disimpan'
    payload.isError = true
    if (error.timeIsError) payload.message = 'Jam Tidak Boleh Kosong'
    if (error.response?.data?.code == 'P2002') payload.message = `Jadwal Hari ${selectedDay.toUpperCase()} Sudah Ada!`
    if (error.code == 'ERR_NETWORK') payload.message = 'Server Tidak Dapat Diakses'
  } finally {
    payload.isLoading = false
    dispatch({ type: types.onSubmit, payload })
    updateNotification({
      id: notifId,
      color: payload.isError ? 'red' : 'green',
      title: payload.isError ? 'Failed Creating Data' : 'Data was created',
      message: 'Notification will close in 2 seconds, you can close this notification now',
      icon: <h1>{payload.isError ? '✘' : '✔'}</h1>,
      autoClose: 2000
    })
  }
}
