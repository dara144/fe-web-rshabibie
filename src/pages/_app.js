import ActiveLink from '@component/ActiveLink'
import Footer from '@layout/Footer'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { NotificationsProvider } from '@mantine/notifications'
import '../styles/globals.css'
import { IoIosCall } from 'react-icons/io'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)
  return getLayout(
    <NotificationsProvider>
      <div className='h-screen'>
        <Component {...pageProps} />
        <div className='fixed bottom-4 left-6 z-10 cursor-pointer rounded-full bg-[#F03E3E] p-3 shadow-2xl'>
          <ActiveLink href='tel://0222501985'>
            <a>
              <IoIosCall className='text-4xl text-white' />
            </a>
          </ActiveLink>
        </div>
        <div className='fixed bottom-4 right-6 z-10 cursor-pointer rounded-full bg-green-400 p-3 shadow-2xl'>
          <ActiveLink href='https://wa.link/zi59nz'>
            <a>
              <BsWhatsapp className='text-4xl text-white' />
            </a>
          </ActiveLink>
        </div>
        <Footer />
      </div>
    </NotificationsProvider>
  )
}

export default MyApp
