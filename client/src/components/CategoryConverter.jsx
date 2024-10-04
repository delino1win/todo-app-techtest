import { GiShoppingBag } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa6";
import { FiWatch } from "react-icons/fi";
import { BsFillQuestionCircleFill } from "react-icons/bs";


export default function CategoryConverter(prop) {

  const {prop:icon} = prop

  const size = "size-[40px] max-sm:size-[30px]"

  if(icon === 'shopping') {
    return <GiShoppingBag fill="yellowgreen" className={`${size}`} />
  }

  if(icon === 'exercise') {
    return <FaDumbbell fill="orange" className={`${size}`} />
  }

  if(icon === 'work') {
    return <FiWatch fill="skyblue" className={`${size}`} />
  }

  if(icon === 'other') {
    return <BsFillQuestionCircleFill fill="" className={`${size}`} />
  }
  
}