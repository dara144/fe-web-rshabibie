export const hari = {
  senin: "Senin",
  selasa: "Selasa",
  rabu: "Rabu",
  kamis: "Kamis",
  jumat: "Jumat",
  sabtu: "Sabtu",
  minggu: "Minggu",
} as const;

export const klinik = {
  penyakitDalamKonsultanGinjalHipertensi:
    "Penyakit Dalam Konsultan Ginjal Hipertensi",
  penyakitDalam: "Penyakit Dalam",
  jantungDanPembuluhDarah: "Jantung & Pembuluh Darah",
  paru: "Paru",
  anak: "Anak",
  bedah: "Bedah",
  gigi: "Gigi",
} as const;

export const jadwalDokter = [
  {
    klinik: klinik.penyakitDalamKonsultanGinjalHipertensi,
    nama: "Dr.dr. Ria Bandiara, Sp.PD-KGH,FINASIM",
    image: "Dr.dr. Ria Bandiara, Sp.PD-KGH,FINASIM.png",
    noIzin: "0015/IPFK-DS/VI/2021/DPMPTSP",
    jadwal: [
      {
        hari: `${hari.rabu} & ${hari.jumat}`,
        jamMulai: "16.00",
        jamSelesai: "17.00",
      },
    ],
  },
  {
    klinik: klinik.penyakitDalamKonsultanGinjalHipertensi,
    nama: "dr. Lukman Pura,Sp.PD-KGH.,MHSM.,FINASIM",
    image: "dr. Lukman Pura,Sp.PD-KGH.,MHSM.,FINASIM.png",
    noIzin: "445/10387-Dinkes/174-SIP-II-DSP/V/19",
    jadwal: [
      {
        hari: hari.sabtu,
        jamMulai: "09.00",
        jamSelesai: "12.00",
      },
    ],
  },
  {
    klinik: klinik.penyakitDalam,
    nama: "dr. Muhammad Rizqan R, Sp.PD",
    image: "dr. Muhammad Rizqan R, Sp.PD.png",
    noIzin: "0081/IPFK-DS/III/2023/DPMPTSP",
    jadwal: [
      {
        hari: `${hari.senin} - ${hari.jumat}`,
        jamMulai: "09.00",
        jamSelesai: "12.00",
      },
    ],
  },
  {
    klinik: klinik.penyakitDalam,
    nama: "dr. Nanik Tri Wulandari, Sp.PD",
    image: "dr. Nanik Tri Wulandari, Sp.PD.png",
    noIzin: "0081/IPFK-DS/III/2023/DPMPTSP",
    jadwal: [
      {
        hari: `${hari.rabu} & ${hari.kamis}`,
        jamMulai: "15.00",
        jamSelesai: "17.00",
      },
    ],
  },
  {
    klinik: klinik.jantungDanPembuluhDarah,
    nama: "dr. Reza Pramayudha, Sp. JP (K), FIHA",
    image: "dr. Reza Pramayudha, Sp. JP (K), FIHA.png",
    noIzin: "0081/IPFK-DS/III/2023/DPMPTSP",
    jadwal: [
      {
        hari: `${hari.selasa} & ${hari.rabu}`,
        jamMulai: "16.00",
        jamSelesai: "18.00",
      },
    ],
  },
  {
    klinik: klinik.paru,
    nama: "dr. Qamariah Laila Marsabessy, Sp.P",
    image: "dr. Qamariah Laila Marsabessy, Sp.P.png",
    noIzin: "0081/IPFK-DS/III/2023/DPMPTSP",
    jadwal: [
      {
        hari: `${hari.selasa} & ${hari.kamis}`,
        jamMulai: "16.30",
        jamSelesai: "19.00",
      },
    ],
  },
  {
    klinik: klinik.anak,
    nama: "dr. Ahmedz Widiasta, Sp.A(K)",
    image: "dr. Ahmedz Widiasta, Sp.A(K).png",
    noIzin: "0081/IPFK-DS/III/2023/DPMPTSP",
    jadwal: [
      {
        hari: hari.kamis,
        jamMulai: "16.30",
        jamSelesai: "18.00",
      },
    ],
  },
  {
    klinik: klinik.bedah,
    nama: "dr. Mounti Martias, Sp.BTKV",
    image: "dr. Mounti Martias, Sp.BTKV.png",
    noIzin: "0081/IPFK-DS/III/2023/DPMPTSP",
    jadwal: [
      {
        hari: `${hari.senin} - ${hari.jumat}`,
        jamMulai: "16.00",
        jamSelesai: "19.00",
      },
      {
        hari: hari.sabtu,
        jamMulai: "14.00",
        jamSelesai: "17.00",
      },
    ],
  },
  {
    klinik: klinik.gigi,
    nama: "drg. R. Yulia Puspitasari",
    image: "drg. R. Yulia Puspitasari.png",
    noIzin: "0081/IPFK-DS/III/2023/DPMPTSP",
    jadwal: [
      {
        hari: `${hari.senin} - ${hari.jumat}`,
        jamMulai: "08.00",
        jamSelesai: "15.00",
      },
    ],
  },
];
