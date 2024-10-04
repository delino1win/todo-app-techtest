import { GiShoppingBag } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa6";
import { FiWatch } from "react-icons/fi";
import { BsFillQuestionCircleFill } from "react-icons/bs";


export default function CategoryConverter(prop) {

  const {prop:icon} = prop

  const size = "size-[57px] max-sm:size-[40px]"

  if(icon === 'shopping') {
    return <GiShoppingBag className={`${size}`} />
  }

  if(icon === 'exercise') {
    return <FaDumbbell className={`${size}`} />
  }

  if(icon === 'work') {
    return <FiWatch className={`${size}`} />
  }

  if(icon === 'other') {
    return <BsFillQuestionCircleFill className={`${size}`} />
  }
  
}