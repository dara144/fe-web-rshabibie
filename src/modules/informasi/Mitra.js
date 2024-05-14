import Border from '@component/border'
import { Grid, Image, Text } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import style from './assets/Mitra.module.css'

export default function Mitra() {
  const { hovered: hovered, ref: ref } = useHover();
  const { hovered: hovered1, ref: ref1 } = useHover();
  const { hovered: hovered2, ref: ref2 } = useHover();
  const { hovered: hovered3, ref: ref3 } = useHover();
  const { hovered: hovered4, ref: ref4 } = useHover();
  const { hovered: hovered5, ref: ref5 } = useHover();
  const { hovered: hovered6, ref: ref6 } = useHover();
  const { hovered: hovered7, ref: ref7 } = useHover();
  const { hovered: hovered8, ref: ref8 } = useHover();
  const { hovered: hovered9, ref: ref9 } = useHover();
  const { hovered: hovered10, ref: ref10 } = useHover();
  const { hovered: hovered11, ref: ref11 } = useHover();
  const { hovered: hovered12, ref: ref12 } = useHover();
  const { hovered: hovered13, ref: ref13 } = useHover();
  const { hovered: hovered14, ref: ref14 } = useHover();
  const { hovered: hovered15, ref: ref15 } = useHover();
  const { hovered: hovered16, ref: ref16 } = useHover();
  return (
    <>
      <Text className={style.h1}
      >Mitra & Rekan</Text>
      <main className={style.wrapper}>
        <Border />

        <Grid gutter='lg'>
          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref}>
            <Image className='p-5 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              height={180}
              src='/MBPJS.png'
              alt='BPJS'
            />
            {hovered && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">PT. BPJS Kesehatan</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[46px]'>
                <ul className='list-disc'>
                  <li>Pelayanan obat penyakit kronis bagi peserta program jamkes.</li>
                  <li>Yankes rujukan tingkat lanjutan bagi peserta program jaminan kesehatan.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref1}>
            <Image className='p-5 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              height={210}
              src='/MInHealth.png'
              alt='PT. Asuransi Jiwa InHealth'
            />
            {hovered1 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">PT. Asuransi Jiwa InHealth</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Pelayanan kesehatan bagi peserta asuransi kesehatan PT. Asuransi Jiwa InHealth Indonesia :
                    <ul className='list-disc px-5'>
                      <li>Rawat Jalan</li>
                      <li>Rawat Inap</li>
                    </ul>
                  </li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref2}>
            <Image className='p-5 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MBorromeus.png'
              alt='Rs. Borromeus'
            />
            {hovered2 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">RS. Borromeus</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Pemeriksaan laboratorium.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref3}>
            <Image className='p-5 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              height={200}
              src='/MHermina.png'
              alt='Rs. Hermina'
            />
            {hovered3 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">RS. Hermina</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Kerjasama pelayanan kesehatan.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref4}>
            <Image className='p-5 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              height={200}
              src='/MDirgantara.png'
              alt='PT. Dirgantara Indonesia (Persero)'
            />
            {hovered4 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">PT. Dirgantara Indonesia (Persero)</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Pelayanan kesehatan.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref5}>
            <Image className='p-5 mt-14 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MProdia.png'
              alt='PT Prodia Widyahusada'
            />
            {hovered5 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">PT. Prodia Widyahusada</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Pelayanan pemeriksaan kesehatan.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref6}>
            <Image className='p-5 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MKAI.png'
              alt='PT. Kereta Api Indonesia (Persero)'
            />
            {hovered6 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">PT. Kereta Api Indonesia (Persero)</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Pelayanan kesehatan bagi peserta
                    program jaminan pemeliharaan (JPK) PT. Kereta Api Indonesia (Persero).
                  </li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref7}>
            <Image className='p-5 mt-8 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              height={150}
              src='/MYakes.png'
              alt='Yakes Telkom'
            />
            {hovered7 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">Yakes Telkom</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Pelayanan kesehatan bagi pegawai/pensiunan PT. Telkom beserta keluarga.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref8}>
            <Image className='p-8 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MAdmedika.png'
              alt='PT. Administrasi Medika'
            />
            {hovered8 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">PT. Administrasi Medika</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Pelayanan kesehatan disesuaikan dengan payer dan plafon yang ada di aplikasi Admedika.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref9}>
            <Image className='p-5 mt-20 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MBRI.png'
              alt='BRI Life'
            />
            {hovered9 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">BRI Life</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Pelayanan kessehatan ranap.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref10}>
            <Image className='p-5 mt-16 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MBCA.png'
              alt='BCA Life'
            />
            {hovered10 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">BCA Life</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[10px]'>
                <ul className='list-none'>
                  <li><i className='text-slate-500'>[Sedang dalam pembaharuan PKS.]</i></li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref11}>
            <Image className='p-5 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MHalodoc.png'
              alt='PT. Media Dokter Investama (HaloDoc)'
            />
            {hovered11 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">PT. Media Dokter Investama (HaloDoc)</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Appointment doctor.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref12}>
            <Image className='p-5 mt-8 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MMega.png'
              alt='PT. Asuransi Umum Mega (Mega Life)'
            />
            {hovered12 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">PT. Asuransi Umum Mega (Mega Life)</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Pemberian pelayanan kesehatan.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref13}>
            <Image className='p-5 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MFullerton.png'
              alt='Asuransi Fullerton'
            />
            {hovered13 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">Asuransi Fullerton</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-disc px-5'>
                  <li>Rawat Jalan,</li>
                  <li>Rawat Inap,</li>
                  <li>MCU.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref14}>
            <Image className='p-3 mt-8 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MPrudential.png'
              alt='Prudential'
            />
            {hovered14 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">Prudential</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-disc px-5'>
                  <li>Rawat Jalan,</li>
                  <li>Rawat Inap.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref15}>
            <Image className='p-5 mt-8 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MBankBJB.png'
              alt='Bank BJB'
            />
            {hovered15 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">Bank BJB</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-disc px-5'>
                  <li>Rawat Jalan,</li>
                  <li>Rawat Inap.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>

          <Grid.Col xl={2} lg={3} sm={5} className='border-2 relative block group'
            ref={ref16}>
            <Image className='mt-10 object-cover cursor-pointer transition ease-in delay-75 group-hover:opacity-5'
              width={250}
              src='/MAlodokter.png'
              alt='PT. Sumo Teknologi Solusi ( Alodokter)'
            />
            {hovered16 && <label className='p-5 cursor-pointer absolute z-10 top-5 left-0 right-0 mr-auto ml-auto text-md font-thin'>
              <tag className="text-cyan-500 font-normal">PT. Sumo Teknologi Solusi (Alodokter)</tag>
              <hr className='mt-2 mb-2' />
              <label className='absolute left-[20px]'>
                <ul className='list-none'>
                  <li>Perjanjian kerjasama program rujukan pasien Alodokter.</li>
                </ul>
              </label>
            </label>}
          </Grid.Col>
        </Grid>
      </main>
    </>
  )
}