import React from 'react'
import Toggle from '../theme/ThemeToggle'

export const Footer = () => {
  return (
    <div className='w-full  bg-gradient-to-t from-gray-200 to-white bg-white z-30 relative || dark:bg-gradient-to-t dark:from-black dark:to-black'>
      <div className="flex px-8 md:px-16 pt-16 justify-between">
         <div className="flex-col mt-3 md:mt-0">
           <h1 className="font-medium uppercase font-Roboto text-2xl text-black || dark:text-white">Patron<span className="text-pink-900 underline underline-offset-4">.</span></h1>
           <Toggle />
         </div>
         
         <div>
         <div className="flex flex-col gap-y-2 py-4">
            <h1 className="font-medium uppercase font-Roboto text-xs text-black || dark:text-white">Quick Links</h1>
            <a href="https://dashboard.niaabujachapter.com/clients/index.php?route=register" className="font-light capitalize font-Roboto text-[12px] text-black || dark:text-white">Register</a>
            <a href="" className="font-light capitalize font-Roboto text-[12px] text-black || dark:text-white">Reach us</a>
            <a href="https://www.niaabujachapter.com/" className="font-light capitalize font-Roboto text-[12px] text-black || dark:text-white">About NIAABC</a>
         </div>
         </div>
      </div>
      
      <div className="flex py-4 justify-center  border-t border-gray-300 || dark:border-gray-500">
      <p className="font-light capitalize font-Roboto text-xs text-black || dark:text-white">Copyright &copy; 2022. Nigeria Institute of Architects - Abuja Chapter</p>
      </div>
    </div>
  )
}
