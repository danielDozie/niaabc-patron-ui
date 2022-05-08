import { Link } from "@remix-run/react"
import { Patron } from "Types"
import _ from "lodash"

const imagePath = 'https://dashboard.niaabujachapter.com/public/uploads/profile/'

export const MemberCard = ({ members }: any) => {
    
    return (<>
        {members && members.map((member: Patron) =>
        <Link to={`/architects/${member.slug}`}  key={member.id}>
            <div className="w-[170px] h-[230px] md:h-[200px] md:w-[200px] rounded-md  mx-auto shadow-sm bg-gradient-to-tl from-white to-slate-50 || dark:bg-gradient-to-tl dark:from-gray-900 dark:to-slate-900 cursor-pointer hover:">
                <div className="flex">
                    <div className="absolute px-1 bg-teal-700 rounded-sm">
                        <p className="text-right text-white justify-end float-right text-[10px]">{member.lead_position !== "" && member.lead_position !== null ? member.lead_position : null}</p>
                    </div>

                    <div className="absolute px-1 mx-32 mt-4 rotate-90 bg-pink-700 rounded-sm md:mx-40">
                        <p className="text-right text-white justify-end float-right text-[10px]">{member.payment_status === "Paid" ? "PATRON" : null}</p>
                    </div>
                </div>
                <img src={member.image === "" || member.image === null ? "../assets/image/profile-img.jpeg" : imagePath + member.image} className="w-20 h-20 mx-auto mt-4 rounded-full" />
                <div className="px-4 text-slate-600 mt-4 text-center md:text-left font-light || dark:text-slate-300">
                    <p className="text-xs capitalize">
                        <span className="text-black || dark:text-white">Name:</span> {_.capitalize(member.firstname)} {_.capitalize(member.lastname)}
                    </p>
                    <p className="text-xs">
                        <span className="text-black || dark:text-white">Cadre:</span> {JSON.parse(member.additional).nia ? JSON.parse(member.additional).nia : 'Not Listed'}
                    </p>
                    <p className="text-xs">
                        <span className="text-black || dark:text-white">DMN:</span> {member.dmn}
                    </p>
                    <p className="text-xs">
                        <span className="text-black || dark:text-white">Financial Status:</span> {member.payment_status === "Unpaid" ? <span className="text-pink-600">Owing</span> : <span className="text-green-600">Financial</span>}
                    </p>
                </div>
            </div>
            </Link>)}
    </>
    )
}
