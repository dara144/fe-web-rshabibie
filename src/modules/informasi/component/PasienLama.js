import Border from "@component/border";
import { Button, Grid, Input, Text, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { BsChevronDown } from "react-icons/bs";
import { MdDateRange } from 'react-icons/md';
import style from '../assets/formulir.module.css'
export default function Daftar() {
  return (
    <>
      <main className={style.wrapper}>
        <div className="h-screen">
          <Text className={style.h1}>Pendaftaran Pasien Lama</Text>
          <Border />
          <Grid className={style.grid}>
            <Grid.Col md={6} lg={5}>
              <TextInput
                label="No. Rekam Medik"
                placeholder="Ketik No Rekam Medik"
                required="*"
              />
              <br />
              <TextInput
                label="Nama Pasien"
                placeholder="Nama Pasien"
                required="*"
              />
              <br />
              <DatePicker
                label="Tanggal Lahir"
                type="date"
                inputFormat="MM/DD/YYYY"
                rightSection={<MdDateRange size={14} stroke={1.5} />}
              />
            </Grid.Col>

            <Grid.Col md={6} lg={5}>
              <label className='font-semibold text-sm'>Pilih Poliklinik</label>
              <Input component="select" rightSection={<BsChevronDown size={14} stroke={1.5} />}>
                <option value="">--Pilih Poliklinik--</option>
                <option value="anak">Klinik Anak</option>
                <option value="bedah">Klinik Bedah</option>
                <option value="hematologi">Klinik Hematologi</option>
                <option value="jantung">Klinik jantung</option>
                <option value="spesialis capd">Klinik Spesialis CAPD</option>
                <option value="spesialis dalam">Klinik Spesialis Dalam</option>
                <option value="spesialis gigi dan mulut">Klinik Spesialis Gigi Dan Mulut</option>
                <option value="spesialis ginjal hipertensi">Klinik Spesialis Ginjal Hipertensi</option>
                <option value="spesialis hematologi onkologi medik">Klinik Spesialis Hematologi Onkologi Medik</option>
                <option value="spesialis jiwa">Klinik Spesialis Jiwa</option>
                <option value="spesialis paru">Klinik Spesialis Paru</option>
                <option value="spesialis urologi">Klinik Spesialis Urologi</option>
                <option value="umum">Klinik Umum</option>
                <option value="mcu">MCU</option>
              </Input>
              <br />
              <label className='font-semibold text-sm'>Pilih Dokter</label>
              <Input component="select" rightSection={<BsChevronDown size={14} stroke={1.5} />}>
                <option value="">--Pilih Dokter Spesialis--</option>
                <option value="Klinik Anak">Klinik Anak</option>
                <option value="Klinik Bedah">Klinik Bedah</option>
                <option value="Klinik Hematologi">Klinik Hematologi</option>
                <option value="Klinik Jantung">Klinik Jantung</option>
                <option value="Klinik Spesialis CAPD">Klinik Spesialis CAPD</option>
                <option value="Klinik Spesialis Dalam">Klinik Spesialis Dalam</option>
                <option value="Klinik Spesialis Ginjal Hipertensi">Klinik Spesialis Ginjal Hipertensi</option>
                <option value="Klinik Spesialis Hematologi Onkologi Medik">Klinik Spesialis Hematologi Onkologi Medik</option>
                <option value="Klinik Spesialis Jiwa">Klinik Spesialis Jiwa</option>
                <option value="Klinik Spesialis Paru">Klinik Spesialis Paru</option>
                <option value="Klinik Spesialis Urologi">Klinik Spesialis Urologi</option>
                <option value="Klinik Umum">Klinik Umum</option>
                <option value="MCU">MCU</option>
              </Input>
              <br />
              <DatePicker
                label="Tanggal Janji"
                type="date"
                inputFormat="MM/DD/YYYY"
                rightSection={<MdDateRange size={14} stroke={1.5} />}
              />
              <br />
              <Button className='px-7 bottom-0 right-0 bg-cyan-600 hover:bg-white border border-cyan-600 hover:text-cyan-600 outline-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2' type='submit'>
                Reservasi
              </Button>
            </Grid.Col>
          </Grid>
        </div>
      </main>
    </>
  )
}