import ActiveLink from '@component/ActiveLink';
import { Col, Grid, Image } from '@mantine/core';
// import style from '../assets/News.module.css'

export default function EdukasiList() {

  return (
    <ul className='list-none text-sm mt-3 mb-12 font-thin'>
      <li>
        <Grid>
          <Col span={4} order={2} orderSm={1} orderLg={3}>
            <ActiveLink
              activeClassName={'text-[#1E90FF]'} href='/informasi/EdukasiGinjal'>
              <a>
                <Image
                  src='/EdukasiGinjal.jpg'
                  alt='Penyakit Ginjal'
                />
              </a>
            </ActiveLink>
          </Col>
          <Col span={8} order={3} orderSm={1} orderLg={2}>
            <ActiveLink
              activeClassName={'text-[#1E90FF]'} href='/informasi/EdukasiGinjal'>
              <a>
                <label className='text-sm font-light text-slate-800/50'>5 Oktober 2022</label>
              </a>
            </ActiveLink>
            <br />
            <ActiveLink
              activeClassName={'text-[#1E90FF]'} href='/informasi/EdukasiGinjal'>
              <a>
                <b className='text-[#53A8FB] text-md font-semibold'>Penyakit Ginjal - Gejala, Penyebab, dan Pengobatan</b>
              </a>
            </ActiveLink>
          </Col>
        </Grid>
      </li>
      <li>
        <Grid>
          <Col span={4} order={2} orderSm={1} orderLg={3}>
            <ActiveLink
              activeClassName={'text-[#1E90FF]'} href='/informasi/EdukasiCuciTangan'>
              <a>
                <Image
                  
                  src='/EdukasiCuciTangan.jpg'
                  alt='Cuci Tangan'
                />
              </a>
            </ActiveLink>
          </Col>
          <Col span={8} order={3} orderSm={1} orderLg={2}>
            <ActiveLink
              activeClassName={'text-[#1E90FF]'} href='/informasi/EdukasiCuciTangan'>
              <a>
                <label className='text-sm font-light text-slate-800/50'>5 Oktober 2022</label>
              </a>
            </ActiveLink>
            <br />
            <ActiveLink
              activeClassName={'text-[#1E90FF]'} href='/informasi/EdukasiCuciTangan'>
              <a>
                <b className='text-[#53A8FB] text-md font-semibold'>Cuci Tangan</b>
              </a>
            </ActiveLink>
          </Col>
        </Grid>
      </li>
    </ul>
  )
}