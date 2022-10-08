import { address } from "@prisma/client";


export type AddressData = Omit<address, 'id'>

export interface AddressBody {
    street: string,
    number: number,
    district: string,
    nickname: string
}