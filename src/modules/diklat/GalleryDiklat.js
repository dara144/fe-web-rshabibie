import { Grid, Text } from "@mantine/core";
import style from "./assets/GalleryDiklat.module.css"
import Border from "@component/border";
import Laktasi from "./component/RuangLaktasi"
import RuangMakan from "./component/RuangMakan"
import RuangStudio from "./component/RuangStudio"
import RuangPerpustakaan from "./component/RuangPerpustakaan";
import RuangPameran from "./component/RuangPameran";
import RuangKelas from "./component/RuangKelas";
import RuangDiskusi from "./component/RuangDiskusi";
import RuangAuditorium from "./component/RuangAuditorium";
import RuangSimulasi from "./component/RuangSimulasi";
import Kegiatan from "./component/Kegiatan";
import GalleryAngkatan from "./component/GalleryAngkatan";

export default function GalleryDiklat() {
  return (
    <>
      <Text className={style.h1}>Gallery Diklat</Text>
      <main className={style.wrapper}>
        <Border />
        <div className={style.h2}>
          <Grid className="mb-5">
            <Grid.Col className="mb-5" md={12} lg={3} xl={3}> <Laktasi />
            </Grid.Col>
            <Grid.Col className="mb-5" md={12} lg={3} xl={3}> <RuangMakan />
            </Grid.Col>
            <Grid.Col className="mb-5" md={12} lg={3} xl={3}> <RuangStudio />
            </Grid.Col>
            <Grid.Col className="mb-5" md={12} lg={3} xl={3}> <RuangPameran />
            </Grid.Col>
            <Grid.Col className="mb-5" md={12} lg={3} xl={3}> <RuangPerpustakaan />
            </Grid.Col>
            <Grid.Col className="mb-5" md={12} lg={3} xl={3}> <RuangKelas />
            </Grid.Col>
            <Grid.Col className="mb-5" md={12} lg={3} xl={3}> <RuangDiskusi />
            </Grid.Col>
            <Grid.Col className="mb-5" md={12} lg={3} xl={3}> <RuangSimulasi />
            </Grid.Col>
            <Grid.Col className="mb-5" md={12} lg={3} xl={3}> <RuangAuditorium />
            </Grid.Col>
            <Grid.Col className="mb-5" md={12} lg={3} xl={3}> <Kegiatan />
            </Grid.Col>
            <Grid.Col className="mb-5" md={12} lg={3} xl={3}> <GalleryAngkatan />
            </Grid.Col>
          </Grid>
        </div>
      </main>
    </>
  )
}












// function GalleryDiklat() {
//   return (
//     <>
//       <Text className={style.h1}
//       >Rawat Inap</Text>
//       <main className={style.wrapper}>
//         <div style={{
//           width: '85vw'
//         }}>
//           <Border />

//           <div className={style.h2}>
//             <p className='text-md mt-5 font-thin mb-5'>Ruang Rawat Inap Rumah Sakit Khusus Ginjal Ny. R.A. Habibie  terbagi atas ruang perawatan Reguler dan Ruang Rawat Intensif. Rumah Sakit Khusus Ginjal Ny. R.A. Habibie memiliki beberapa jenis ruang perawatan, yaitu :</p>
//             <Grid className='mb-2'>
//               <Grid.Col className='mb-5' md={12} lg={3} xl={3}>
//                 <VIP />
//               </Grid.Col>

//               <Grid.Col className='mb-5' md={12} lg={3} xl={3}>
//                 <Kelas1 />
//               </Grid.Col>

//               <Grid.Col className='mb-5' md={12} lg={3} xl={3}>
//                 <Kelas2 />
//               </Grid.Col>

//               <Grid.Col className='mb-5' md={12} lg={3} xl={3}>
//                 <Kelas3 />
//               </Grid.Col>
//             </Grid>

//             <p className='text-md mt-5 font-[350] text-[#4B3F3F]'><label className='text-red-500'>*</label> Setiap ruang rawat inap RSKG Ny.R.A. Habibie dilengkapi fasilitas free Wi-Fi.</p>
//           </div>
//         </div>
//       </main>
//     </>
//   )

// }

// export default GalleryDiklat;
