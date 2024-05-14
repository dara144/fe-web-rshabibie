import { Menu, ScrollArea } from "@mantine/core";
import style from './assets/Admin.module.css'
import { AiFillHome } from "react-icons/ai";
import ActiveLink from "@component/ActiveLink";
import LinkBar from "@modules/admin/component/LinkBar";

export default function Admin() {
  return (
    <>
      <div className={style.sidebar}>
        <ScrollArea style={{
          marginLeft: '3vh',
          height: '100vh'
        }} type="always">
          <div className="text-white mt-5">
            <span className='text-[1.6vw] mx-12'>Admin Panel</span>
            <div className="my-4">
              <label className="text-[2vh] text-slate-300">NAVIGATION</label>
            </div>
            <Menu>
              <ActiveLink activeClassName={'text-white'} href='/admin/Dashboard'>
                <a className='hover:text-white relative'>
                  <AiFillHome className='absolute h-5 w-4' /> <span className={style.span}>Dashboard</span>
                </a>
              </ActiveLink>
              <hr className="mr-8 my-4" />
              <label className="text-[2vh] text-slate-300">APPS</label>
              <div >
                <LinkBar />
              </div>
            </Menu>
          </div>
        </ScrollArea>
      </div>
    </>
  )
}