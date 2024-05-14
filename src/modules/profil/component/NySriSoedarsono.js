import { Grid, Modal, Text } from '@mantine/core'
import style from '../assets/Biografi.module.css'
import Border from '../../../component/border'
import { useState } from 'react';
import Image from 'next/future/image';
import nysri from '../assets/image/Ny.-Sri-Soedarsono.jpg'
import border from '../assets/image/border.png'

function Bio3() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Text className={style.h1}
      >Ny. Sri Soedarsono</Text>
      <main className={style.wrapper}>
        <div className='w-[85vw] h-screen'>
          <Border />
          <Grid>
            <Grid.Col md={6} lg={5} xl={2.3}>
              <Image className='rounded-md lg:w-full mr-6 sm:w-full'
                src={nysri}
                alt="Ny. Sri Soedarsono"
              />
            </Grid.Col>
            <Grid.Col md={6} lg={7} xl={9.3}>
              <div className={style.h2}>
                <p className='text-md font-thin'>Sri Soedarsono dialah Ny. Sri Soedarsonoirkan pada hari Minggu 8 Oktober 1938 di Pare-Pare, Sulawesi Selatan. Oleh orang tuanya, Alwi Abdul Djalil Habibie dan R.A. Tuti Marini Puspowardojo memberinya nama Sri Redjeki Chasanah. Dalam bahasa Jawa, Sri berarti perempuan cantik, Rejeki adalah anugerah yang diberikan Allah SWT kepada mereka, dan Chasanah dalam bahasa Arab berarti kebaikan.
                  <br />
                  <br />
                  Sri Redjeki Chasanah, sebuah nama yang sarat makna, seorang perempuan cantik yang diharapkan membawa banyak rejeki dan menebarkan kebaikan. Tentu saja kedua pasangan suami isteri itu berharap agar bayi yang baru saja dilahirkannya menjadi anak yang soleh dan berguna bagi nusa dan bangsanya. Nama yang diberikan pasangan suami isteri itu merupakan perpaduan nama jawa dan islami. Ini mungkin karena asal usul kedua orang tuanya.
                  <br />
                  <br />
                  R.A. Tuti Puspowardojo adalah seorang priyayi asal Purworejo, Jawa Tengah. Sedangkan Alwi Abdul Djalil Habibie seorang lelaki muslim asal Gorontalo yang dikenal pria taat beragama. Karenanya, tak heran jika kedua pasangan suami isteri itu memberikan nama untuk anaknya yang merupakan perpaduan antara bahasa Jawa dan nuansa keislaman. Sri Soedarsono merupakan anak ke-6 dari 8 bersaudara. <i className='cursor-pointer text-cyan-500' onClick={() => setOpened(true)}>
                    Klik disini untuk melihat lebih detail..
                  </i>
                </p>
                <br />

                <Modal
                  size='85%'
                  opened={opened}
                  onClose={() => setOpened(false)}
                >
                  <div className='mx-[3vw]'>
                    <Grid>
                      <Grid.Col md={12} lg={4.5} xl={2.7}>
                        <Image className='w-full rounded-md shadow-xl'
                          src={nysri}
                          alt="Ny. Sri Soedarsono"
                        />
                      </Grid.Col>
                      <Grid.Col md={12} lg={7.5} xl={9}>
                        <div className='grid grid-cols-2'>
                          <Image
                            width={320}
                            src={border}
                            alt="border"
                          />
                          <Image
                            width={320}
                            src={border}
                            alt="border"
                          />
                        </div>
                        <div className={style.h2}>
                          <p className='text-md font-thin mt-5'>Sri Soedarsono dialah Ny. Sri Soedarsonoirkan pada hari Minggu 8 Oktober 1938 di Pare-Pare, Sulawesi Selatan. Oleh orang tuanya, Alwi Abdul Djalil Habibie dan R.A. Tuti Marini Puspowardojo memberinya nama Sri Redjeki Chasanah. Dalam bahasa Jawa, Sri berarti perempuan cantik, Rejeki adalah anugerah yang diberikan Allah SWT kepada mereka, dan Chasanah dalam bahasa Arab berarti kebaikan.
                            <br />
                            <br />
                            Sri Redjeki Chasanah, sebuah nama yang sarat makna, seorang perempuan cantik yang diharapkan membawa banyak rejeki dan menebarkan kebaikan. Tentu saja kedua pasangan suami isteri itu berharap agar bayi yang baru saja dilahirkannya menjadi anak yang soleh dan berguna bagi nusa dan bangsanya. Nama yang diberikan pasangan suami isteri itu merupakan perpaduan nama jawa dan islami. Ini mungkin karena asal usul kedua orang tuanya.
                          </p>
                        </div>
                      </Grid.Col>
                    </Grid>
                    <div className={style.h2}>
                      <p className='text-md font-thin mb-12'>
                        R.A. Tuti Puspowardojo adalah seorang priyayi asal Purworejo, Jawa Tengah. Sedangkan Alwi Abdul Djalil Habibie seorang lelaki muslim asal Gorontalo yang dikenal pria taat beragama. Karenanya, tak heran jika kedua pasangan suami isteri itu memberikan nama untuk anaknya yang merupakan perpaduan antara bahasa Jawa dan nuansa keislaman. Sri Soedarsono merupakan anak ke-6 dari 8 bersaudara.
                        <br />
                        <br />
                        Mereka terdiri dari Titi Sri Sulaksmi, Sutoto Moh Duhri, Alwini Karsum, Baharuddin Jusuf Habibie, Junus Effendi, Sri Redjeki, Sri Rahayu, dan Suyatin Abd.Rahman. Pasangan suami R.A. Tuti Marini dan Alwi Abdul Djalil Habibie merupakan pasangan yang sangat dihormati dan disegani di daerah tersebut. Alwi Abdul Djalil Habibie tidak saja dikenal sebagai orang yang taat beragama, mudah bergaul, tetapi juga memiliki kharisma yang kuat serta mempunyai jabatan penting di daerah tersebut. Saat itu, Alwi Abdul Djalil Habibie menjabat sebagai Landbouw Consuler Pare-Pare, atau setingkat Kepala Dinas Pertanian saat itu. Ayah Habibie yang lahir di Gorontalo, 17 Agustus 1900 adalah lulusan Sekolah Pertanian dari Bogor yang ketika di zaman penjajahan Belanda disebut Buitenzorg. Begitu juga R.A. Tuti Marini, ibunda Sri. Bila meruntut pada silsilahnya, Ny R.A. Tuti Marini Puspowardojo yang lahir pada 10 November 1910 memiliki keturunan ningrat dari tanah Jawa. Hanya saja, keluarga tersebut dan R.A. Tuti Marini sendiri memang tidak pernah menginginkan untuk menonjolkan silsilahnya.<br />
                        <br />
                        Gelar Raden Ajeng (R.A) yang disandangnya nyaris tak pernah digunakan. Gelar itu juga tidak diberikan kepada anak-anaknya lantaran posisinya yang lemah. Dalam kamus gelar kebangsawanan, biasanya gelar Raden tidak dapat diteruskan dari seorang perempuan. Meski R.A Tuti Marini dan keluarganya tak menonjolkan untuk memperbesar asal-usulnya sebagai keturunan ningrat, namun beliau sendiri sulit melepaskannya. Warga sekitarnya sangat menghormati statusnya sebagai keturunan ningrat, terutama pembantu-pembantunya yang selalu menyebut tuannya dengan sebutan “Ndoro Putri”, sebuah panggilan hormat untuk perempuan yang berasal dari keturunan ningrat.
                      </p>
                    </div>
                  </div>
                </Modal>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </main >
    </>
  )

}

export default Bio3;
