import { Grid, Modal } from "@mantine/core";
import Image from "next/future/image";
import mcu from '../assets/image/mcu.jpg'
import border from '../assets/image/border.png'
import { useState } from "react";
import style from '../assets/MCU.module.css'

export default function ModalMCU() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div className={style.h2}>
        <p className='text-md font-thin'><i>Medical Check Up</i> (MCU) adalah suatu pemeriksaan kesehatan seseorang secara berkala dan menyeluruh sehingga seseorang dapat memonitor kesehatan tubuhnya, diharapkan apabila ada suatu penyakit atau gangguan kesehatan yang timbul, maka bisa dideteksi sedini mungkin. <i className='text-[#1E90FF] cursor-pointer'
          onClick={() => setOpened(true)}>Klik disini untuk melihat lebih detail..</i></p>

        <Modal
          size='95%'
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <div className='mx-[5vw]'>
            <div className={style.h2}>
              <Grid>
                <Grid.Col md={12} lg={5} xl={4}>
                  <Image className='rounded-lg overflow-clip shadow-xl'
                  width={500}
                    src={mcu}
                    alt="MCU"
                  />
                </Grid.Col>
                <Grid.Col md={12} lg={7} xl={8}>
                  <div className='grid grid-cols-2'>
                    <Image
                      width={500}
                      src={border}
                      alt="border"
                    />
                    <Image
                      width={500}
                      src={border}
                      alt="border"
                    />
                  </div>
                  <p className='text-md font-thin mt-5'><b><i>Medical Check Up </i>(MCU)</b> adalah suatu pemeriksaan kesehatan seseorang secara berkala dan menyeluruh sehingga seseorang dapat memonitor kesehatan tubuhnya, diharapkan apabila ada suatu penyakit atau gangguan kesehatan yang timbul, maka bisa dideteksi sedini mungkin.
                    <br />
                    <br />
                    <b><i>Medical Check Up </i>karyawan</b> merupakan salah satu program kesehatan dan keselamatan kerja (K3) yang perlu dilakukan oleh tiap perusahaan untuk mengetahui kondisi terkini dari kesehatan karyawan atau calon karyawannya, sehingga perusahaan dapat menentukan kemampuan karyawan dalam melakukan suatu pekerjaan yang dapat dilihat dari sisi kesehatan.
                  </p>
                </Grid.Col>

              </Grid>
              <p className='text-md font-thin mt-5'></p>
              <p className='text-md mt-3 font-thin'>Hal ini penting untuk mencegah penyakit atau kecelakaan yang mungkin ditimbulkan akibat bahaya yang munucl di lingkungan kerja. Instalasi <i>Medical Check Up</i> RS Khusus Ginjal Ny. R.A. Habibie memberikan pelayanan pemeriksaan kesehatan menyeluruh baik untuk perorangan maupun untuk karyawan instansi/perusahaan sebagai bentuk kepedulian kami terhadap program kesehatan dan keselamatan kerja para pekerja.</p>
              <p className='text-md mt-3 font-thin'>Selain pemeriksaan kesehatan, <i>Medical Check Up</i> RS Khusus Ginjal Ny. R.A. Habibie juga memberikan pelayanan vaksinasi, yang berupa vaksinasi Hepatitis B dan vaksinasi yang diperlukan untuk ibadah umroh maupun apabila masyarakat akan berpegian keluar negeri yang mewajibkan untuk mendapatkan vaksinasi tertentu tergantung dari penyakit endemis yang ada di wilayah tersebut.</p>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}