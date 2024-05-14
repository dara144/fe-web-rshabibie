import BudayaLarge from "./component/BudayaLarge";
import BudayaSmall from "./component/BudayaSmall";
import style from './assets/BudayaKeselamatanRS.module.css'

export default function BudayaKeselamatanRS(){
  return(
    <>
    <div className={style.large}>
      <BudayaLarge />
    </div>
    <div className={style.small}>
      <BudayaSmall />
    </div>
    </>
  )
}