import ActiveLink from "@component/ActiveLink"
import { Box, Button, PasswordInput, TextInput } from "@mantine/core"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import style from "./assets/formulir.module.css"

export default function Registrasi() {
  return (
    <>
      <main className={style.wrapper}>
        <div className='place-content-center min-h-screen'>
          <div className={style.container}>
            <h1 className="text-center mb-2 mt-5">Registrasi</h1>
            <hr />
            <TextInput
              label="Nama Lengkap"
              mt={20}
            />
            <TextInput
              label="Email"
              mt={20}
            />
            <PasswordInput
              label="Password"
              visibilityToggleIcon={({ reveal, size }) =>
                reveal ? <AiOutlineEyeInvisible size={size} /> : <AiOutlineEye size={size} />
              }
              mt={20}
            />
            <PasswordInput
              label="Password Again"
              visibilityToggleIcon={({ reveal, size }) =>
                reveal ? <AiOutlineEyeInvisible size={size} /> : <AiOutlineEye size={size} />
              }
              mt={20}
            />
            <ActiveLink activeClassName={'text-primary'} href='./formulir'>
              <a>
                <Button className='px-7 mt-5 mb-4 bg-cyan-600 hover:bg-white rounded-xl border border-cyan-600 hover:text-cyan-600 outline-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2' type='submit'>
                  Registrasi
                </Button>
              </a>
            </ActiveLink>
            {/* <br />
          <ActiveLink activeClassName={'text-primary'} href='./login'>
            <label className={style.p}>Sudah Punya Akun? Login.</label>
          </ActiveLink> */}
          </div>
        </div>
      </main>
    </>
  )
}