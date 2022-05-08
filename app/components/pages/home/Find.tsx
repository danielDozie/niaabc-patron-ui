import { Link } from "@remix-run/react";
import { Button } from "~/components/Button";
export const Find = () => {
  return (
    <div className="w-full mx-auto mt-16 h-[400px] bg-[url('../../assets/image/people.jpg')] ">
        <div className="bg-black/80 w-full h-[400px]">
            <div className="px-8 md:px-16">
                <div className="flex flex-col md:flex-row mt-4 gap-x-8">
                    <div className="w-full">
                        <div className="mt-40 text-center align-middle">
                            <div>
                                <Link to={'architects'}>
                                <Button type="rounded-gradient" text="Find Architects" />
                                </Link>
                                <p className="text-sm font-normal text-gray-300 pt-4">Find architects within the fits of <b>NIAABC</b> using either just phone number or architects DMN</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}
