import { LuRefrigerator } from 'react-icons/lu'

const deviceData = [
  {
    id: 1,
    name: 'Refrigerator',
    icon: <LuRefrigerator />,
    color: '#4793AF',
  },
  {
    id: 2,
    name: 'Clothes washer',
    icon: <LuRefrigerator />,
    color: '#FFC470',
  },
  {
    id: 3,
    name: 'Clothes Iron',
    icon: <LuRefrigerator />,
    color: '#DD5746',
  },
  {
    id: 4,
    name: 'Computer',
    icon: <LuRefrigerator />,
    color: '#8B322C',
  },
  {
    id: 5,
    name: 'Oven',
    icon: <LuRefrigerator />,
    color: '#FA7070',
  },
  {
    id: 6,
    name: 'Play',
    icon: <LuRefrigerator />,
    color: '#59D5E0',
  },
  {
    id: 7,
    name: 'TV',
    icon: <LuRefrigerator />,
    color: '#C6EBC5',
  },
  {
    id: 8,
    name: 'Sound system',
    icon: <LuRefrigerator />,
    color: '#A1C398',
  },
]

export function RecentSales() {
  return (
    <div className='flex flex-col space-y-4'>
      {deviceData.map((device) => (
        <div key={device.id} className='flex items-start'>
          <div className='h-9 w-9 flex-none'>{device.icon}</div>
          <div className='ml-4 flex-grow'>
            <p className='text-sm font-medium leading-none'>{device.name}</p>
          </div>
          <div className='ml-4 flex-none'>
            <div
              className='h-9 w-9 rounded-full'
              style={{ backgroundColor: device.color }}
            ></div>
          </div>
          <div className='ml-2 flex-none'>
            <p className='text-sm font-medium leading-none'>{device.color}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
