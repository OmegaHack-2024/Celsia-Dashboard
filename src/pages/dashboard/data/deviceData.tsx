import { LuRefrigerator } from 'react-icons/lu'
import { GiClothes, GiChickenOven } from 'react-icons/gi'
import { TbIroning3 } from 'react-icons/tb'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FaPlaystation } from 'react-icons/fa'
import { PiTelevisionSimple } from 'react-icons/pi'
import { AiFillSound } from 'react-icons/ai'

export const deviceData = [
  {
    id: 1,
    name: 'Refrigerator',
    icon: <LuRefrigerator />,
    color: '#4793AF',
  },
  {
    id: 2,
    name: 'Clothes washer',
    icon: <GiClothes />,
    color: '#FFC470',
  },
  {
    id: 3,
    name: 'Clothes Iron',
    icon: <TbIroning3 />,
    color: '#DD5746',
  },
  {
    id: 4,
    name: 'Computer',
    icon: <HiOutlineDesktopComputer />,
    color: '#8B322C',
  },
  {
    id: 5,
    name: 'Oven',
    icon: <GiChickenOven />,
    color: '#FA7070',
  },
  {
    id: 6,
    name: 'Play',
    icon: <FaPlaystation />,
    color: '#59D5E0',
  },
  {
    id: 7,
    name: 'TV',
    icon: <PiTelevisionSimple />,
    color: '#C6EBC5',
  },
  {
    id: 8,
    name: 'Sound system',
    icon: <AiFillSound />,
    color: '#A1C398',
  },
]
