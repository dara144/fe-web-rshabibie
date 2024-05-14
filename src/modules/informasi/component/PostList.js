import ActiveLink from '@component/ActiveLink';
import { Col, Grid, Image } from '@mantine/core';
// import style from '../assets/News.module.css'

export default function PostList() {

  return (
    <ul className='list-none text-sm mt-3 mb-12 font-thin'>
      <li>
        <Grid>
          <Col span={4} order={2} orderSm={1} orderLg={3}>
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/tbcParu'>
              <a>
                <Image
                  src='/tbcparu.jpg'
                  alt='TBC Pada Paru'
                />
              </a>
            </ActiveLink>
          </Col>
          <Col span={8} order={3} orderSm={1} orderLg={2}>
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/tbcParu'>
              <a>
                <label className='text-sm font-light text-slate-800/50'>20 September 2021</label>
              </a>
            </ActiveLink>
            <br />
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/tbcParu'>
              <a>
                <b className='text-cyan-600 text-md font-semibold'>TBC Pada Paru-Paru</b>
              </a>
            </ActiveLink>
          </Col>
        </Grid>
      </li>
      <li>
        <Grid>
          <Col span={4} order={2} orderSm={1} orderLg={3}>
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/gagalginjal'>
              <a>
                <Image
                  
                  src='/gagalginjal.jpg'
                  alt='Gagal Ginjal'
                />
              </a>
            </ActiveLink>
          </Col>
          <Col span={8} order={3} orderSm={1} orderLg={2}>
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/gagalginjal'>
              <a>
                <label className='text-sm font-light text-slate-800/50'>15 Juli 2021</label>
              </a>
            </ActiveLink>
            <br />
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/gagalginjal'>
              <a>
                <b className='text-cyan-600 text-md font-semibold'>Gagal Ginjal</b>
              </a>
            </ActiveLink>
          </Col>
        </Grid>
      </li>
      <li>
        <Grid>
          <Col span={4} order={2} orderSm={1} orderLg={3}>
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/ckd'>
              <a>
                <Image 
                  src='/ckd.png'
                  alt='Chronic Kidney Disease (CKD)'
                />
              </a>
            </ActiveLink>
          </Col>
          <Col span={8} order={3} orderSm={1} orderLg={2}>
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/ckd'>
              <a>
                <label className='text-sm font-light text-slate-800/50'>14 November 2018</label>
              </a>
            </ActiveLink>
            <br />
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/ckd'>
              <a>
                <b className='text-cyan-600 text-md font-semibold'>Chronic Kidney Disease (CKD)</b>
              </a>
            </ActiveLink>
          </Col>
        </Grid>
      </li>
      <li className='mb-3'>
        <Grid>
          <Col span={4} order={2} orderSm={1} orderLg={3}>
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/digiHealthRSKG'>
              <a>
                <Image
                  src='/digihealth.png'
                  alt='DigiHealth RSKG'
                />
              </a>
            </ActiveLink>
          </Col>
          <Col span={8} order={3} orderSm={1} orderLg={2}>
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/digiHealthRSKG'>
              <a>
                <label className='text-sm font-light text-slate-800/50'>14 November 2018</label>
              </a>
            </ActiveLink>
            <br />
            <ActiveLink
              activeClassName={'text-primary'} href='/informasi/digiHealthRSKG'>
              <a>
                <b className='text-cyan-600 text-md font-semibold'>DigiHealth RSKG</b>
              </a>
            </ActiveLink>
          </Col>
        </Grid>
      </li>

    </ul>
  )
}