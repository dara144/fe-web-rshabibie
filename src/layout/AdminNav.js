import { Button, Group, Header, Input, Tooltip, useMantineTheme } from '@mantine/core'
import style from './assets/Admin.module.css'
import { IoSearch } from 'react-icons/io5';

export default function AdminNav() {
  return (
    <>
      <main className={style.wrapper}>
        <Header className={style.nav}>
          <Input
            className='w-80 rounded-r-none'
            placeholder="Search for.."
            rightSection={
              <div>
                <Button variant="default" className={style.button} ><IoSearch className='text-white text-lg shadow-md' /></Button>
              </div>
            }
          />
        </Header>
      </main>
    </>
  )
}