
import style from '@styles/Nav.module.css'
import ActiveLink from '@component/ActiveLink'
import { MdEmail, MdOutlineHealthAndSafety, MdOutlineLocationOn } from 'react-icons/md'
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
              <ActiveLink href='mailto:rumahsakitginjal@gmail.com?subject=Halo Saya Pasien....'>
                <a>
                  rumahsakitginjal@gmail.com
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
          <hr />
          <x-contact>
            <MdOutlineLocationOn />
            <span>
              <ActiveLink href="https://maps.app.goo.gl/zzG7W4Gzwo7XWthXA">
                <a>
                  Jl. Tubagus Ismail No.46
                </a>
              </ActiveLink>
            </span>
          </x-contact>
        </div>
        <nav className={style.container}>
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
        </nav>
      </header>
      {children}
    </>
  )
}
