import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

export const Hero = () => {
  return (
    <div className="w-full mx-auto h-full bg-[url('../../assets/image/structure.jpg')] bg-contain"> 
    <div className="w-full h-full pt-20 pb-16 bg-black/80">
    <div className="px-8">
        <div className="mx-auto mt-20 text-center font-Roboto">
          <img src={`../assets/image/Logo.svg`} className='h-24 mx-auto' alt='logo' />
          <div>
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-900 text-7xl md:text-9xl">NIAABC PATRON</h1>
          </div>
          <div className="flex justify-center py-8 font-light text-center text-white text-md gap-x-4">
            <span>Verifiable </span>
            <IoMdCheckmarkCircleOutline className="mt-1 text-pink-500" size={16}/>
            <span>Accountable</span>
            <IoMdCheckmarkCircleOutline className="mt-1 text-pink-500" size={16}/>
            <span>Nigerian</span>
          </div>
          <div className="py-8">
            <button className="px-8 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200">Get Started</button>
          </div>
        </div>
      </div>
      </div>
  </div>
  )
}
