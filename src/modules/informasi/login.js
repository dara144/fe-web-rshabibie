import ActiveLink from "@component/ActiveLink";
import { Box, Button, PasswordInput, TextInput } from "@mantine/core";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import style from "./assets/formulir.module.css"

export default function Login() {
  return (
    <>
      <main style={{
        width: '30vw',
        margin: 'auto',
        marginTop: '2vh'
      }}>
        <Box
          sx={(theme) => ({
            padding: theme.spacing.xl,
            width: '32vw',
            marginBottom: '12vh'
          })}
        >
          <h1 className="text-center mb-2">Login</h1>
          <hr />
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
          <ActiveLink activeClassName={'text-primary'} href='./formulir'>
            <Button className='px-7 mt-5 mb-4 bg-cyan-600 hover:bg-white rounded-xl border border-cyan-600 hover:text-cyan-600 outline-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2' type='submit'>
              Login
            </Button>
          </ActiveLink>
          {/* <br />
          <ActiveLink activeClassName={'text-primary'} href='./registrasiOnline'>
            <label className={style.p}>Belum Punya Akun? Registrasi.</label>
          </ActiveLink> */}
        </Box>
      </main>
    </>
  )
}