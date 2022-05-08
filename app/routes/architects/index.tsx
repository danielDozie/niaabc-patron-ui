import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import axios from 'axios';
import { Architects } from '../../components/pages/architects/Architects';
import { Members } from 'Types';

export async function Members(): Promise<Members> {
    const { data } = await axios.get(process.env.API_URL + '/users');
    return data
}

export const loader: LoaderFunction = async () => {
    const response = await Members()
    return response
};

export default function index(): JSX.Element {
    const memberData = useLoaderData()
    return (
        <Architects memberData={memberData} />
    )
}
