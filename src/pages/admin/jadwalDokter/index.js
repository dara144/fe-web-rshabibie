import { useJadwalDokter, acType as type, getState } from '@modules/admin/hooks/useJadwalDokter'

function Index() {
  const jadwalDokter = useJadwalDokter(state => state.onSubmit)
  console.log(jadwalDokter)
  return <div>Index Jadwal Dokter</div>
}
export default Index
