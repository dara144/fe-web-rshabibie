import ActiveLink from "@component/ActiveLink";
import { Avatar, Button, Card, Divider, Grid, Group, Text } from "@mantine/core";
import { FaHandHoldingHeart, FaHandHoldingMedical } from "react-icons/fa";
import style from "../assets/Registrasi.module.css"

export default function Registrasi() {
  return (
    <div className={style.wrapper}>
      <Grid>
        <Grid.Col md={6} lg={6}>
          <Card className="bg-[#1E90FF] hover:bg-white" shadow="sm" p="lg" radius="md" withBorder>
            <Group className="text-white hover:text-[#1E90FF]" mt="md">
              <FaHandHoldingMedical size='5vw' />
              <br />
              <Text weight={500} size='xl'>Pendaftaran Pasien Baru</Text>

              <div className="hover:text-slate-500">
                <Text size="sm">Silahkan Akses Menu ini, Untuk <strong>Calon Pasien</strong> Yang <strong>Belum Pernah</strong> Berobat Sebelumnya ke RSKG Ny. R.A. Habibie. <strong>Belum</strong> Memiliki KIP (Kartu Identitas Pasien) dan atau <strong>Belum</strong> Memiliki Nomor <i>Medical Record</i> di RSKG Ny. R.A. Habibie.</Text>

                <ActiveLink activeClassName={'text-[#1E90FF]'} href='informasi/PasienBaru'>
                  <Button className="bg-[#1E90FF]" fullWidth mt="md" radius="md">
                    Daftar
                  </Button>
                </ActiveLink>
              </div>

            </Group>
          </Card>
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
          <Card className="bg-[#8DC4F9] hover:bg-white" shadow="sm" p="lg" radius="md" withBorder>
            <Group className="text-white hover:text-[#8DC4F9]" mt="md">
              <FaHandHoldingHeart size='5vw' />
              <br />
              <Text weight={500} size='xl'>Pendaftaran Pasien Lama</Text>

              <div className="hover:text-slate-500">
                <Text size="sm">Silahkan Akses Menu Ini, Untuk Pasien Yang <strong>Sudah Pernah</strong> Berobat Sebelumnya di RSKG Ny. R.A. Habibie, <strong>Sudah</strong> Memiliki KIP (Kartu Identitas Pasien) dan atau <strong>Sudah</strong> Memiliki Nomor <i>Medical Record</i> di RSKG Ny. R.A. Habibie.</Text>

                <ActiveLink activeClassName={'text-[#1E90FF]'} href='informasi/PasienLama'>
                  <Button className="bg-[#8DC4F9] hover:bg-[#53A8FB]" fullWidth mt="md" radius="md">
                    Reservasi
                  </Button>
                </ActiveLink>
              </div>

            </Group>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  )
}