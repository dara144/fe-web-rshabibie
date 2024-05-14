import { Accordion, ScrollArea, Text } from "@mantine/core"
import style from '../assets/AlurPendaftaran.module.css'
import PendaftaranBaru from '../assets/image/PendaftaranBaru.jpg'
import PendaftaranRajal from '../assets/image/AlurRajal.png'
import PendaftaranRanap from '../assets/image/AlurRanap.png'
import PendaftaranPoliklinik from '../assets/image/AlurPPoli.png'
import PendaftaranHD from '../assets/image/AlurPHD.png'
import PenerimaanRehab from '../assets/image/PenerimaanRehab.jpg'
import PendaftaranLab from '../assets/image/PendaftaranLab.jpg'
import AlurPasienIGDRanap from '../assets/image/AlurPIGDRanap.png'
import AlurPasienIGDHD from '../assets/image/AlurPIGDHD.png'
import AlurPasienIGDAv from '../assets/image/AlurPIGDAv.png'
import AlurPasienIGDCDL from '../assets/image/AlurPIGCDL.png'
import AlurPasienIGDRujukRanap from '../assets/image/AlurPIGDRujukRanap.png'
import AlurPasienIGDRujukRajal from '../assets/image/AlurPIGDRujukRajal.png'
import Image from "next/image"

function Alur() {
  const alur = [
    {
      value: 'customization',
      src: PendaftaranBaru,
      alt: 'Pendaftaran Pasien Baru',
      judul: 'Pendaftaran Pasien Baru'
    },
    {
      value: 'customization1',
      src: PendaftaranRajal,
      alt: 'Alur Pendaftaran Rawat Jalan',
      judul: 'Alur Pendaftaran Rawat Jalan'
    },
    {
      value: 'customization2',
      src: PendaftaranRanap,
      alt: 'Alur Pendaftaran Rawat Inap',
      judul: 'Alur Pendaftaran Rawat Inap'
    },
    {
      value: 'customization3',
      src: PendaftaranPoliklinik,
      alt: 'Alur Pendaftaran Pasien Poliklinik',
      judul: 'Alur Pendaftaran Pasien Poliklinik'
    },
    {
      value: 'customization4',
      src: PendaftaranHD,
      alt: 'Alur Pendaftaran Pasien Hemodialisa (HD)',
      judul: 'Alur Pendaftaran Pasien Hemodialisa (HD)'
    },
    {
      value: 'customization5',
      src: PenerimaanRehab,
      alt: 'Penerimaan Poli Rehabilitas Medik',
      judul: 'Penerimaan Poli Rehabilitas Medik'
    },
    {
      value: 'customization6',
      src: PendaftaranLab,
      alt: 'Pendaftaran Pasien Laboratorium',
      judul: 'Pendaftaran Pasien Laboratorium'
    },
    {
      value: 'customization7',
      src: AlurPasienIGDRanap,
      alt: 'Alur Pasien IGD (Rawat Inap)',
      judul: 'Alur Pasien IGD (Rawat Inap)'
    },
    {
      value: 'customization8',
      src: AlurPasienIGDHD,
      alt: 'Alur Pasien IGD (HD Overtime)',
      judul: 'Alur Pasien IGD (HD Overtime)'
    },
    {
      value: 'customization9',
      src: AlurPasienIGDAv,
      alt: 'Alur Pasien IGD (Av-Shunt)',
      judul: 'Alur Pasien IGD (Av-Shunt)'
    },
    {
      value: 'customization10',
      src: AlurPasienIGDCDL,
      alt: 'Alur Pasien IGD (CDL)',
      judul: 'Alur Pasien IGD (CDL)'
    },
    {
      value: 'customization11',
      src: AlurPasienIGDRujukRanap,
      alt: 'Alur Pendaftaran IGD (dari HD Rujuk Rawat Inap)',
      judul: 'Alur Pendaftaran IGD (dari HD Rujuk Rawat Inap)'
    },
    {
      value: 'customization12',
      src: AlurPasienIGDRujukRajal,
      alt: 'Alur Pasien IGD (dari Poli Rujuk Rawat Inap)',
      judul: 'Alur Pasien IGD (dari Poli Rujuk Rawat Inap)'
    }
  ]
  // for (let i = 0; i < alur.length; ++i) {
  //   const data = alur[i]

  return (
    <>
     <ScrollArea style={{ height: 1000 }}>
      <div>
        {alur.map(
          (data) =>
          (<>
            <div>
              <Accordion defaultValue="customization" className={style.h2}>
                <Accordion.Item value={data.value}>
                  <Accordion.Control className={style.title}>{data.judul}</Accordion.Control>
                  <Accordion.Panel>
                    <Image className="lg:max-w-xl sm:w-full object-cover"
                      radius='md'
                      src={data.src}
                      alt={data.alt}
                    /><p className={style.p}><em className="italic">Sumber : RS  Khusus Ginjal Ny. R.A. Habibie</em></p>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </>)
        )}
      </div>
    </ScrollArea>
    </>
  )
}
// }

export default Alur;