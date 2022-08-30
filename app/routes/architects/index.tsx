import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import axios from 'axios';
import { Architects } from '../../components/pages/architects/Architects';
import type { Members } from 'Types';

export async function MembersData(): Promise<Members> {
    const { data } = await axios.get(process.env.API_URL + '/users');
    return data
}

export const loader: LoaderFunction = async () => {
    const response = await MembersData()
    return response
};

export default function Index(): React.ReactElement {
    const memberData = useLoaderData()

    return (
        <Architects memberData={memberData ?? memberData} />
    )
}
