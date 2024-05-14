import ActiveLink from "@component/ActiveLink"
import style from '../assets/LinkBar.module.css'
import { RiStethoscopeFill } from "react-icons/ri"
import { Accordion, Menu } from "@mantine/core"

export default function LinkBar() {
  return (
    <>
      <Menu className='mt-4 mx-10'>
        <Accordion defaultValue="customization" className="mr-8 ">
          <Accordion.Item value="customization">
            <Accordion.Control className="text-white hover:bg-transparent relative"> 
            <RiStethoscopeFill className='absolute h-5 w-5 left-0' />
            <sapan className={style.accordion}>Jadwal Dokter</sapan>
            </Accordion.Control>
            <Accordion.Panel className="text-slate-300 text-sm px-3">
              <ul className="list-none">
                <li className="mb-3">
                  <ActiveLink activeClassName={'text-white'} href='/admin/jadwalDokter/create'>
                    <a className='hover:text-white'>
                      <span>Create Jadwal Dokter</span>
                    </a>
                  </ActiveLink>
                </li>
                <li className="mb-3">
                  <ActiveLink activeClassName={'text-white'} href='/admin/dokter/update'>
                    <a className='hover:text-white'>
                      <span>Update Data Dokter</span>
                    </a>
                  </ActiveLink>
                </li>
              </ul>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Menu>
    </>
  )
}