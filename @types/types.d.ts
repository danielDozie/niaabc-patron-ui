declare module 'Types' {
    export type Members = {
        memberData: {}[];
    }
    export type Patron = { 
        id: number, 
        firstname: string, 
        lastname: string, 
        dmn: string, 
        image: string, 
        payment_status: string, 
        additional: string, 
        nia: string, 
        lead_position: string, 
        slug: string 
    }
    export interface Architect {
        id: number;
        payment_status: string;
        image: string;
        firstname: string
        lastname: string
        lead_position: string
        email: string;
        phone: string;
        additional ?: any
        nia: string;
        gender: string;
        marital_status: string;
        nia_member1: string;
        nia_member2: string;
        nia_member3: string;
        nia_member4: string;
        nia_member5: string;
        nia_member6: string;
        arcon_member1: string;
        arcon_member2: string;
        arcon_member3: string;
        arcon_member4: string;
        arcon_member5: string;
        address: any;
        address1: string;
        dmn: string;

    }


}
