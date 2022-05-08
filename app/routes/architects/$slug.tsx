import { LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import axios from "axios"
const imagePath = 'https://dashboard.niaabujachapter.com/public/uploads/profile/'
type Architect = {
    data: {}
}

export async function GetArchitect(slug: string): Promise<Architect> {
    const { data } = await axios.get(process.env.API_URL + `/users/` + slug)
    return data
}

export const loader: LoaderFunction = async ({ params }: any): Promise<Architect> => {
    const response = await GetArchitect(params.slug)
    return response
}

export default function Index() {
    const member = useLoaderData()
    return (
        <>
            <div className="w-full pt-20 pb-16">
                {/* <h1 className="my-4 text-3xl font-bold text-center">DMN - {member.dmn}</h1> */}

                <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] justify-center gap-x-40 rounded-sm shadow-sm mx-auto bg-slate-50 pt-8 md:mt-12 pb-12 text-slate-600 || dark:bg-gray-900 dark:text-slate-300">
                    <div className="flex-col">

                    <div className="absolute px-1 mx-4 -mt-2 rotate-90 bg-pink-700 rounded-sm md:-mx-40">
                        <p className="text-right text-white justify-end float-right text-[14px]">{member.payment_status === "Paid" ? "PATRON" : null}</p>
                    </div>

                        <img src={member.image === "" || member.image === null ? "../assets/image/profile-img.jpeg" : imagePath + member.image} className="w-40 h-40 mx-auto mt-12 rounded-full shadow-md" />
                        <div className="mt-4 text-sm text-center">
                            <p className="font-bold">{member.firstname} {member.lastname}</p>
                            <p className="">{member.lead_position}</p>
                            <p className="">{member.email}</p>
                            <a href={`tel:${member.phone}`}><p className="py-4 font-semibold text-gray-900 || dark:text-white ">{member.phone.length < 11 ? `${member.phone} Update required` : member.phone}</p></a>
                            
                        </div>
                    </div>
                    
                    <div className="px-4 text-slate-600 mt-12 text-center md:text-left font-light || dark:text-slate-300">
                        <div className="flex flex-col justify-start mx-4 md:mx-0 md:justify-center gap-y-1">
                            <h1 className="text-2xl font-bold text-left">Basic Information</h1>
                            <p className="text-sm text-left"><span className="text-sm font-semibold text-left">Fullname:</span> {member.firstname} {member.lastname}</p>
                            <p className="text-sm text-left"><span className="text-sm font-semibold text-left">Lead Position:</span> {member.lead_position !== "" && member.lead_position !== null ? member.lead_position : "None"} </p>
                            <p className="text-sm text-left"><span className="text-sm font-semibold text-left">Email:</span> {member.email}</p>
                            <p className="text-sm text-left">
                                <span className="text-sm font-semibold text-left">Cadre: </span>
                                <span className="text-sm text-left">{JSON.parse(member.additional).nia ? JSON.parse(member.additional).nia : 'Not Listed'}</span>
                            </p>
                            <p className="text-sm text-left">
                                <span className="font-semibold text-left text-md">Member DMN: </span>
                                <span className="text-left text-md">{member.dmn}</span>
                            </p>
                            {/* Additional Information */}
                            <h1 className="pt-8 pb-4 text-2xl font-bold text-left">Additional Information</h1>
                            <p className="text-sm text-left"><span className="text-sm font-semibold text-left">Gender: </span>{JSON.parse(member.additional).gender ? JSON.parse(member.additional).gender : "Not Given"}</p>
                            <p className="text-sm text-left"><span className="text-sm font-semibold text-left">Marital Status:</span> {JSON.parse(member.additional).marital_status ? JSON.parse(member.additional).marital_status : "Not Given"} </p>
                            <p className="text-sm text-left"><span className="text-sm font-semibold text-left">NIA Membership:</span> {(JSON.parse(member.additional).nia_member1 ? JSON.parse(member.additional).nia_member1 + JSON.parse(member.additional).nia_member2 + JSON.parse(member.additional).nia_member3 + JSON.parse(member.additional).nia_member4 + JSON.parse(member.additional).nia_member5 + JSON.parse(member.additional).nia_member6 : "Not Registered")}</p>
                            <p className="text-sm text-left">
                                <span className="text-sm font-semibold text-left">ARCON Membership: </span>
                                <span className="text-sm text-left">{(JSON.parse(member.additional).arcon_member1 ? JSON.parse(member.additional).arcon_member1 + JSON.parse(member.additional).arcon_member2 + JSON.parse(member.additional).arcon_member3 + JSON.parse(member.additional).arcon_member4 + JSON.parse(member.additional).arcon_member5 : "Not Registered")}</span>
                            </p>
                            <p className="text-sm text-left">
                                <span className="text-sm font-semibold text-left">Financial Status: </span>
                                <span className="text-sm text-left">{member.payment_status == "Paid" ? <span className="text-green-700">Financial</span> : <span className="text-pink-500">Owing</span>}</span>
                            </p>
                            <p className="text-sm text-left">
                                <span className="text-sm font-semibold text-left">Address: </span>
                                <span className="text-sm text-left">{JSON.parse(member.address).address1 ? JSON.parse(member.address).address1 : "Not Given"}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

