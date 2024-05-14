import ActiveLink from "@component/ActiveLink";
import { Drawer, Tabs, Burger, List, Divider, Accordion, ScrollArea, Avatar, ThemeIcon } from "@mantine/core";
import { useState } from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import style from '@styles/Nav.module.css'
import Image from "next/image";
import logo_rskg from 'public/logo_rskg.png'
import { RiStethoscopeFill } from "react-icons/ri";
import { BiHome, BiHomeAlt } from "react-icons/bi";
import { TbBuildingHospital, TbDiscount2, TbNurse, TbShoppingCartDiscount, TbStethoscope } from "react-icons/tb";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";

export default function NavBurger() {
  const [opened, setOpened] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const title = opened ? 'Close navigation' : 'Open navigation'
  const onClickOff = () => setOpened(false)
  return (
    <>
      <Burger opened={opened} onClick={() => setOpened(o => !o)} title={title} />
      <Drawer opened={opened} onClose={() => setOpened(false)} className='bg-base-100' title={<Image src={logo_rskg} width='230vw' height='46vh' alt='logo' />} padding='md' size='full' overlayOpacity={0} overlayBlur={5}>
        <ScrollArea style={{ height: 550 }} type="never">
          {/* <Tabs defaultValue="burger" className={style.tabs} orientation='vertical' active={activeTab} onTabChange={setActiveTab}> */}
          <List className="m-auto my-3 w-[20em]">
            <List className="text-xl font-medium" value="home" label='home'>
              <Accordion defaultValue="menu home"
                styles={{
                  item: {
                    // styles added to all items
                    border: '#ededed',

                    // styles added to expanded item
                    '&[data-active]': {
                      background: '#fff'
                    },
                  },

                  chevron: {
                    // styles added to chevron when it should rotate
                    '&[data-rotate]': {
                      transform: 'rotate(-90deg)',
                    },
                  },
                }}>
                <Accordion.Item className="-mb-6 ml-[-16px]" value="home">
                  <Accordion.Control className="text-black hover:bg-transparent hover:text-[#1E90FF]">
                    <span className="text-xl font-medium">
                      <ThemeIcon size="lg" variant="light" color='indigo' className="mr-3">
                        <BiHomeAlt size={18} color='#BAC8FF' />
                      </ThemeIcon>
                      Home
                    </span>
                  </Accordion.Control>
                  <Accordion.Panel className="text-slate-300 text-sm px-12">
                    <ul className="li-none">
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/profil/CompanyProfile'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Company Profile
                          </a>
                        </ActiveLink>
                      </li>
                    </ul>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </List>
            <br />
            <div className="text-xl font-medium text-black hover:text-[#1E90FF]" value="dokter" label='dokter'>
              <ActiveLink activeClassName='text-[#1E90FF]' href='/dokter/Dokter'>
                <a onClick={onClickOff}>
                  <List.Item>
                    <ThemeIcon size="lg" variant="light" color='cyan' className="mr-3">
                      <TbStethoscope size={18} color='#99E9F2' />
                    </ThemeIcon>
                    Dokter
                  </List.Item>
                </a>
              </ActiveLink>
            </div>
            <List className="text-xl font-medium" value="pelayanan" label='pelayanan'>
              <Accordion defaultValue="menu pelayanan"
                styles={{
                  item: {
                    // styles added to all items
                    border: '#ededed',

                    // styles added to expanded item
                    '&[data-active]': {
                      background: '#fff'
                    },
                  },

                  chevron: {
                    // styles added to chevron when it should rotate
                    '&[data-rotate]': {
                      transform: 'rotate(-90deg)',
                    },
                  },
                }}>
                <Accordion.Item className="-mb-10 ml-[-16px]" value="pelayanan">
                  <Accordion.Control className="text-black hover:bg-transparent hover:text-[#1E90FF]">
                    <span className="text-xl font-medium">
                      <ThemeIcon size="lg" variant="light" color='grape' className="mr-3">
                        <TbNurse size={18} color='#EEBEFA' />
                      </ThemeIcon>
                      Pelayanan
                    </span>
                  </Accordion.Control>
                  <Accordion.Panel className="text-slate-300 text-sm px-12">
                    <ul className="li-none">
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/pelayanan/IGD'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Instalasi Gawat Darurat (IGD)
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/pelayanan/HD'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Hemodialisis (HD)
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/pelayanan/RawatJalan'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Rawat Jalan
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/pelayanan/CAPD'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            CAPD
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/pelayanan/RawatInap'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Rawat Inap
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/pelayanan/PelayananBedah'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Pelayanan Bedah
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/pelayanan/Radiologi'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Radiologi & USG
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/pelayanan/Laboratorium'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Laboratorium
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/pelayanan/Farmasi'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Farmasi
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/pelayanan/MCU'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Medical Check UP (MCU)
                          </a>
                        </ActiveLink>
                      </li>
                    </ul>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </List>
            <br />
            <List className="text-xl font-medium" value="informasi" label='informasi'>
              <Accordion defaultValue="menu informasi"
                styles={{
                  item: {
                    // styles added to all items
                    border: '#ededed',

                    // styles added to expanded item
                    '&[data-active]': {
                    },
                  },

                  chevron: {
                    // styles added to chevron when it should rotate
                    '&[data-rotate]': {
                      transform: 'rotate(-90deg)',
                    },
                  },
                }}>
                <Accordion.Item className="-mb-10 ml-[-16px]" value="informasi">
                  <Accordion.Control className="text-black  hover:bg-transparent hover:text-[#1E90FF]">
                    <span className="text-xl font-medium">
                      <ThemeIcon size="lg" variant="light" color='pink' className="mr-3">
                        <AiOutlineInfoCircle size={18} color='#FCC2D7' />
                      </ThemeIcon>
                      Informasi
                    </span>
                  </Accordion.Control>
                  <Accordion.Panel className="text-slate-300 text-sm px-12">
                    <ul className="li-none">
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi//promo/Promo'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Promo & Paket Layanan
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/AlurPendaftaran'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Alur Pendaftaran
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/registrasiOnline'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Registrasi Online
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/Fasilitas'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Fasilitas
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/BudayaKeselamatanRS'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Budaya Keselamatan Rumah Sakit
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/BPJSKesehatan'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            BPJS Kesehatan
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/Mitra'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Mitra & Rekan
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/gagalginjal'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Artikel & Informasi
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}><ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/Edukasi'>
                        <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                          Edukasi
                        </a>
                      </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/TataTertib'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Tata Tertib
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/HakDanKewajiban'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Hak Dan Kewajiban
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/LayananPengaduan'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Layanan Pengaduan
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/Saran'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Saran
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/informasi/Kontak'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Kontak
                          </a>
                        </ActiveLink>
                      </li>
                    </ul>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </List>
            <br />
            <List className="text-xl font-medium" value="diklat" label='diklat'>
              <Accordion defaultValue="menu diklat"
                styles={{
                  item: {
                    // styles added to all items
                    border: '#ededed',

                    // styles added to expanded item
                    '&[data-active]': {
                    },
                  },

                  chevron: {
                    // styles added to chevron when it should rotate
                    '&[data-rotate]': {
                      transform: 'rotate(-90deg)',
                    },
                  },
                }}>
                <Accordion.Item className="-mb-6 ml-[-16px]" value="diklat">
                  <Accordion.Control className="text-black  hover:bg-transparent hover:text-[#1E90FF]">
                    <span className="text-xl font-medium">
                      <ThemeIcon size="lg" variant="light" color='orange' className="mr-3">
                        <FaChalkboardTeacher size={18} color='#FFD8A8' />
                      </ThemeIcon>
                      Diklat
                    </span>
                  </Accordion.Control>
                  <Accordion.Panel className="text-slate-300 text-sm px-12">
                    <ul className="li-none">
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/diklat/ProfilDiklat'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Profil Diklat
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/diklat/PelatihanCAPD'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Pelatihan CAPD
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/diklat/PelatihanHD'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Pelatihan Dialisis
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/diklat/Angkatan1'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Lulusan Pelatihan Dialisis
                          </a>
                        </ActiveLink>
                      </li>
                      <li className={style.li}>
                        <ActiveLink activeClassName='text-[#1E90FF]' href='/diklat/AngkatanCAPD'>
                          <a className="hover:text-[#1E90FF] text-[#3f3f3f] font-medium" onClick={onClickOff}>
                            Lulusan Pelatihan CAPD
                          </a>
                        </ActiveLink>
                      </li>
                    </ul>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </List>
            <br />
            <div className="text-xl font-medium mb-6 text-md text-black hover:text-[#1E90FF]" value="mutu" label='Buat mutu'>
              <ActiveLink activeClassName='text-[#1E90FF]' href='/mutu/KebersihanTangan'>
                <a onClick={onClickOff}>
                  <List.Item>
                    <ThemeIcon size="lg" variant="light" color='green' className="mr-3">
                      <VscGraphLine size={18} color='#B2F2BB' />
                    </ThemeIcon>
                    Indikator Mutu
                  </List.Item>
                </a>
              </ActiveLink>
            </div>
          </List>
          {/* </Tabs> */}
        </ScrollArea>
      </Drawer>
    </>
  )
}