import style from '@styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update setiap menit

    return () => clearInterval(intervalId);
  }, []);

  return (

    <footer className={style.footer}>
      <label>© Copyright {currentYear}. All Rights Reserved by RS Khusus Ginjal Ny. R.A. Habibie.</label>
    </footer>
  )
}