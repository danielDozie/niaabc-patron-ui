import { BiSearchAlt } from 'react-icons/bi'
import { MemberCard } from './MemberCard'
import { Members } from 'Types'
import _ from 'lodash';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import React from 'react';
import { Button } from '~/components/Button';

export const Architects = ({ memberData }: Members) => {
  const init = 0
  const [endValue, setEndValue] = React.useState(44)
  const countMembers = _.size(memberData)
  const sortedMembers = _.sortBy(memberData, ['dmn'])
  const members = _.slice(sortedMembers, init, endValue)
  const [buttonLoading, setButtonLoading] = React.useState(false)
  const [patrons, setPatrons] = React.useState(members)

  const handleLoadMore = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    setButtonLoading(true)
    setTimeout(() => {
      setEndValue(endValue + 20)
      const updatedMembers = _.slice(sortedMembers, init, endValue)
      setPatrons(updatedMembers)
      setButtonLoading(false)
    }, 1000);
  }

  React.useEffect(() => {
    setPatrons(members)
  }, [endValue])


  return (
    <div className="pb-16 pt-20 || dark:bg-black">
      {/* <div className="static w-full h-12 text-sm bg-gray-900">
            <div className="flex justify-center mx-auto gap-x-4">
                <input type="text" className="w-[40%]  mt-2 border border-gray-200 p-2 capitalize text-xs font- bg-transparent rounded-sm text-white " placeholder="Search architects using either fullname, phone number or architect&apos;s DMN"/>
                <button className="px-4 py-2 mt-2 text-sm font-medium text-gray-100 hover:text-pink-700">Search</button>
            </div>
        </div> */}
      <div className="flex px-8 gap-x-8 pb-12 bg-white || dark:bg-black">
        <div className="relative justify-start hidden w-1/4 h-full px-4 mx-auto text-center md:block">
          <div className="fixed w-1/4 mt-4 text-left">
            <h1 className="text-sm text-black uppercase font-bold || dark:text-white">Find Architects</h1>
            <p className="w-4/5 text-xs py-2 text-black font-light || dark:text-white">Search architects using either full name, phone number or architect&apos;s DMN.</p>
            <input type="text" className="w-4/5 mt-4 border border-gray-200 p-2 capitalize text-xs font- bg-transparent rounded-sm text-black || dark:text-white" placeholder={`Enter search term (Members Count: ${countMembers})`} />
            <div className="pt-2">
              <Button type="flat-gradient" text="SEARCH" icon={<BiSearchAlt size="25" className="pt-1" />} />
            </div>
            
            <div className="mt-12">
              <h1 className="text-sm text-black uppercase font-bold mb-2 || dark:text-white">News & Events</h1>
              <div className="flex flex-col overflow-auto h-72">
                {News.map((article, index) =>
                  <div className="flex w-5/6 h-20 my-2 cursor-pointer" key={index}>
                    <div className="w-[30%] pt-2">
                      <img src={article.image} className="mr-2 rounded-sm w-14 h-14" />
                    </div>
                    <div className="w-full ">
                      <h1 className="text-[10px] p-1 text-black font-bold || dark:text-white">
                        {article.title}
                      </h1>
                      <p className="text-[10px] p-1 -mt-2 text-slate-900 font-light || dark:text-slate-300">
                        {article.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:w-3/4 md:float-right md:justify-end">
          {/* //grid with 4 rows */}
          <div className="grid grid-cols-2 gap-4 mx-auto overflow-hidden auto-rows-max md:grid-cols-4">
            <MemberCard members={patrons} />
          </div>
          <div className="justify-center w-48 py-8 mx-auto text-center">
            {buttonLoading ? <button className="px-4 py-2 mt-2 text-sm font-normal text-gray-100 bg-gray-500 rounded-sm" disabled onClick={handleLoadMore}><span className="flex"><AiOutlineLoading3Quarters className="mt-1 font-bold animate-spin" size={14} /><p className="ml-2">Wait... </p></span></button> : <button className="bg-gray-900 text-gray-100  font-normal py-2 px-4 text-sm mt-2 bg-gradient-to-r from-pink-900 to-red-900 rounded-sm|| hover:bg-gradient-to-l hover:from-pink-900 hover:to-red-900" onClick={handleLoadMore}>Load more</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

const News = [
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  },
  {
    title: 'The new NIAABC has been approved by the Ministry of Education',
    content: 'The new NIAABC has been approved by the Ministry of Education coming home to the town.',
    image: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
  }
]