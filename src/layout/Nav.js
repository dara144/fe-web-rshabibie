
import style from '@styles/Nav.module.css'
import ActiveLink from '@component/ActiveLink'
import { MdEmail, MdOutlineHealthAndSafety } from 'react-icons/md'
import { useMediaQuery } from '@mantine/hooks'
import logo_rskg from '/public/header-web.png'
import Image from 'next/image'
import NavMenu from './component/NavMenu'
import Burger from './component/NavBurger'
import { BsInstagram } from 'react-icons/bs'
export default function Nav({ children }) {
  const matches = useMediaQuery('(min-width: 900px)', true, { getInitialValueInEffect: false })

  return (
    <>
      <header className='sticky top-0 z-10'>
        <div className={style.header}>
          <x-contact>
            <MdEmail />
            <span>
              <ActiveLink href='mailto:rskginjal@gmail.com?subject=Halo Saya Pasien....'>
                <a>
                  rskginjal@gmail.com
                </a>
              </ActiveLink>
            </span>
          </x-contact>
          <hr />
          <x-contact>
            <BsInstagram />
            <span>
              <ActiveLink href='https://www.instagram.com/rskg_habibie'>
                <a>
                  rskg_habibie
                </a>
              </ActiveLink>
            </span>
          </x-contact>
        </div>
        <div className={style.container}>
          <x-logo>
            <ActiveLink activeClassName={'text-primary'} href='/'>
              <a className='cursor-pointer'>
                <Image src={logo_rskg} width='230vw' height='46vh' alt='logo' />
              </a>
            </ActiveLink>
          </x-logo>
          {matches ? (
            <NavMenu />
          ) : (
            <Burger />
          )}
        </div>
      </header>
      {children}
    </>
  )
}
