import style from './assets/formulir.module.css'
import Border from '@component/border'
import { Button, Card, Grid, Group, Text } from '@mantine/core'
// import Daftar from './component/formulirOnline'
// import PBaru from './component/PasienBaru'
import ActiveLink from '@component/ActiveLink'

export default function Formulir() {
  return (
    <>
      <main className={style.wrapper}>
        <div className='h-screen'>
          <Text className={style.h1}
          >Formulir Online</Text>
          <Border />
          <Grid>
            <Grid.Col md={6} lg={4}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Group position="apart" mt="md" mb="xs">
                  <label className='font-semibold text-lg'>Pendaftaran Pasien Baru</label>
                </Group>

                <Text size="sm" color="dimmed">
                  Klik disini jika belum mempunyai no rekam medik.</Text>

                <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/PasienBaru'>
                  <Button component='a' variant="light" color="blue" fullWidth mt="md" radius="md">
                    Daftar
                  </Button>
                </ActiveLink>
              </Card>
            </Grid.Col>

            <Grid.Col md={6} lg={4}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Group position="apart" mt="md" mb="xs">
                  <label className='font-semibold text-lg'>Pendaftaran Pasien Lama</label>
                </Group>

                <Text size="sm" color="dimmed">
                  Klik disini untuk reservasi kunjungan anda.</Text>

                <ActiveLink activeClassName={'text-[#1E90FF]'} href='/informasi/PasienLama'>
                  <Button component='a' variant="light" color="blue" fullWidth mt="md" radius="md">
                    Reservasi
                  </Button>
                </ActiveLink>
              </Card>
            </Grid.Col>
          </Grid>
        </div>
      </main >
    </>
  )
}