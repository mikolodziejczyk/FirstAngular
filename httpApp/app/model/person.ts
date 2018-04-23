import { Address } from "./address";

export interface Person {
    FirstName: string,
    LastName: string,
    Score: number,
    StartDate: string
    Addresses: Address[]
}