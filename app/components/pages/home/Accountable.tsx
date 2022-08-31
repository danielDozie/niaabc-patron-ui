import { Button } from "~/components/Button"

export const Accountable = () => {
    return (
        <div className="w-full h-full mx-auto bg-white || dark:bg-black">
            <div className="px-8 md:px-16">
                <div className="flex flex-col pt-20 md:flex-row gap-x-8">
                    <div className="w-full md:w-3/5">
                        <div className="my-4">
                            <div className="my-6">
                                <h1 className="text-black font-bold text-3xl md:text-3xl uppercase || dark:text-white">We're Accountable<span className="text-pink-500">.</span></h1>
                            </div>
                            <p className="text-sm font-light text-gray-700 md:text-md dark:text-gray-300">
                                We remain true to the same principles on which Nigerian Institute of Architects (N.I.A) was founded since 1960: producing members that create superior designs, shaping our world, putting safety first & creating vast opportunities. In this way, we want you to be recognised for the quality of your works, social heirarchy and great contributions you've made and attributes to which the institution was founded.
                                <br />
                                <br />
                                Pioneer members who were mainly public civil servants with FCDA formed the NIA Abuja Chapter in 1986; these were Architects who were residents in Abuja.  We interacted as members of an extended family and supported each other.
                                <br />
                                <br />
                                The membership of the Chapter has grown astronomically and most members are now from the private sector. The rapid urbanization of Abuja has resulted in members becoming part of a nuclear family without much contact with professional colleagues.
                                <br />
                                The future of the Chapter depends on effective communication; value-added activities and products to sustain members’ interests and participation. The new Website/Social Media Platform is a welcome development as it is in tune with current trends in Intelligent Architecture using modern technology.
                            </p>
                        </div>
                        <div className="mt-12">
                            <Button text={"Reach out to us"} type={"flat"} />
                        </div>
                    </div>
                    <div className="w-full my-12 md:w-2/5 md:mt-0">
                        <img src="../assets/image/accountables.jpg" alt="Niaabc" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
