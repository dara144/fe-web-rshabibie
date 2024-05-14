import { Col, Grid, Image, Text, Title } from '@mantine/core';
import style from '../assets/News.module.css'
import { AiFillTag, AiOutlineClockCircle } from "react-icons/ai"
import { BsPersonFill } from "react-icons/bs";
import { FaComments } from 'react-icons/fa';
import PostList from './PostList'

export default function DigiHealth() {
  return (
    <>
      <main className={style.wrapper}>
        <div style={{
          width: '85vw'
        }}>
          <Grid>
            <Grid.Col md={9} lg={8}>

              <AiFillTag className={style.tag} />
              <label className={style.label}>Informasi Rumah Sakit</label>

              <Title className={style.h1}>DIGIHEALTH RSKG</Title>
              <div className='grid grid-cols-2 mb-2 max-w-full'>
                <Image
                  src="/border.png"
                  alt="border"
                />
                <Image
                  src="/border.png"
                  alt="border"
                />

              </div>
              <Grid>
                <Col span={3} order={2} orderSm={1} orderLg={3}> <AiOutlineClockCircle className={style.tag} /><label className={style.label}>14 November 2018
                </label>
                </Col>
                <Col span={3} order={3} orderSm={1} orderLg={2}><BsPersonFill className={style.tag} />
                  <label className={style.label}>By. Admin</label>
                </Col>
                <Col span={3} order={1} orderSm={3} orderLg={1}>
                  <FaComments className={style.tag} /><label className={style.label}>0</label>
                </Col>
              </Grid>

              <div className='mt-6'>
                <Image
                  radius="md"
                  src="/digihealth.png"
                  alt="DIGIHEALTH RSKG"
                />
              </div>

              <p className='text-md mt-5 mb-12 font-thin'>
                Download apk aplikasi mobile pasien <a href='https://ufile.io/08xu9'><u className='text-cyan-600'>https://ufile.io/08xu9</u> .</a>
              </p>
            </Grid.Col>
            <Grid.Col md={6} lg={4}>
              <div className={style.h3}>
                <i>Post Terakhir</i>
                <hr />
                <PostList />
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </main>
    </>
  )
}