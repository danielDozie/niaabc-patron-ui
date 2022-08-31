import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import { Architects } from '../../components/pages/architects/Architects';
import type { Members } from 'Types';
import React from 'react';


export const loader: LoaderFunction = async () => {
    const d = await fetch(process.env.API_URL + '/users');
    return json({
        memberData: await d.json() as Members[],
    })
};

export default function Index(): React.ReactElement {
    const {memberData} = useLoaderData()
    return (
        <Architects memberData={memberData} />
    )
}
