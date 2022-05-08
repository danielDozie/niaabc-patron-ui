import { FiLogIn } from 'react-icons/fi'
import {RiMenuFill} from 'react-icons/ri'


export const Header = () => {

  const homeLink = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    window.location.href = '/'
  }

  return (
    <div className="w-full h-18 pb-1 bg-white fixed font-Cormorant border-b border-gray-300 || dark:bg-black/90 dark:md:bg-black/80 dark:border-gray-800 z-50">
      <div className='flex justify-between py-2 px-4 md:px-8'>
        <div>
          
          <div className="mt-2 h-10 w-10 bg-[url('../../assets/image/LogoDark.svg')] bg-contain || dark:bg-[url('../../assets/image/Logo.svg')] cursor-pointer" onClick={homeLink} />
        </div>
        <div className="flex-col text-center font-Roboto">
          <div className='bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-red-900 text-2xl font-bold'>PATRON</div>
          <div className='text-black font-normal text-[11px] md:text-xs || dark:text-white'>Nigeria Institute of Architects - Abuja Chapter</div>
        </div>
        <div className='flex gap-x-1'>
          <a href={'/'}>
            <button className="text-black font-medium text-sm mt-4 hidden md:block || dark:text-white">Sign in  </button>
          </a>
          <FiLogIn className="text-black mt-4 md:mt-5 cursor-pointer text-[24px] md:text-sm hidden md:block || dark:text-white" />
          <RiMenuFill className="text-black mt-4 md:mt-5 cursor-pointer text-[24px] md:text-sm md:hidden || dark:text-white" />
        </div>
      </div>
    </div>
  )
}
