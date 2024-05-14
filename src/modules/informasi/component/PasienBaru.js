import { Button, Grid, Input, NumberInput, Radio, Text, Textarea, TextInput } from "@mantine/core";
import style from "../assets/formulir.module.css"
import Border from "@component/border"
import { BsChevronDown } from "react-icons/bs";
import { DatePicker } from "@mantine/dates";
import { MdDateRange } from "react-icons/md";
import ActiveLink from "@component/ActiveLink";
import { Select } from '@mantine/core';
import useWilayah from "../hooks/useWilayah";
export default function PBaru() {
 const {searchValue,onSearchChange,provinsi,kabupaten,kecamatan, setIdProvinsi,setIdKabupaten} = useWilayah()
  return (
    <>
      <main className={style.wrapper}>
        <Text className={style.h1}
        >Pendaftaran Pasien Baru</Text>
        <Border />
        <Grid className={style.grid}>
          <Grid.Col md={6} lg={5}>
            <TextInput
              label="Nama Pasien"
              placeholder="Nama Lengkap Pasien"
              required="*"
            />
            <br />
            <DatePicker
              label="Tanggal Lahir"
              type="date"
              inputFormat="MM/DD/YYYY"
              required="*"
              rightSection={<MdDateRange size={14} stroke={1.5} />}
            />
            <br />
            <NumberInput
              label="Umur"
              placeholder="Umur Pasien"
              min={0}
              max={120}
              required="*"
            />
            <br />
            <Radio.Group
              label="Jenis Kelamin"
            >
              <Radio value="laki-laki" label="L" />
              <Radio value="perempuan" label="P" />
            </Radio.Group>
            <br />
            <NumberInput
              hideControls
              label="No. Mobile Pasien"
              placeholder="No Yang Bisa Dihubungi"
              required="*"
            />
            <br />
            <label className='font-semibold text-sm'>Agama</label>
            <Input
              component="select"
              rightSection={<BsChevronDown size={14} stroke={1.5}
              />}>
              <option value="">--Pilih Agama--</option>
              <option value="islam">Islam</option>
              <option value="kristen protestan">Kristen Protestan</option>
              <option value="kristen katolik">Kristen Katolik</option>
              <option value="hindu">Hindu</option>
              <option value="buddha">Buddha</option>
              <option value="konghucu">Konghucu</option>
            </Input>
          </Grid.Col>
          <Grid.Col md={6} lg={5}>
            <Textarea
              label="Alamat Pasien"
              placeholder="Alamat Lengkap Pasien"
              required="*"
            />
            <br />
            <label className='font-semibold text-sm'>Provinsi</label>
            <Select
               nothingFound="No options" onChange={setIdProvinsi} data={provinsi} placeholder="Pilih Provinsi" searchable/>
            <br />
            <label className='font-semibold text-sm'>Kabupaten/Kota</label>
            <Select
                searchValue={searchValue.kabupaten} 
                onSearchChange={data => onSearchChange(prev=>({...prev,kabupaten:data}))}  
                data={kabupaten}
                onChange={setIdKabupaten}
                placeholder="Pilih Kabupaten" 
                nothingFound="No options" 
                searchable />
            <br />
            <label className='font-semibold text-sm'>Kecamatan</label>
            <Select
                searchValue={searchValue.kecamatan} 
                onSearchChange={data => onSearchChange(prev=>({...prev,kecamatan:data}))}  
                data={kecamatan} 
                placeholder="Pilih Kecamatan" 
                nothingFound="No options" 
                searchable />
            <br />
            <label className='font-semibold text-sm'>Warga Negara</label>
            <Input
              component="select"
              rightSection={<BsChevronDown size={14} stroke={1.5}
              />}>
              <option value="">--Pilih Warga Negara--</option>
              <option value="a">Warga Negara Indonesia (WNI)</option>
              <option value="b">Warga Negara Asing (WNA)</option>
            </Input>
            <ActiveLink activeClassName={'text-primary'} href='/informasi/PasienLama'>
              <Button className='px-10 mt-5 bg-[#1E90FF] hover:bg-white border border-[#1E90FF] hover:text-[#1E90FF] outline-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-offset-2' type='submit'>
                Daftar
              </Button>
            </ActiveLink>
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}