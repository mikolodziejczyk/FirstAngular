import { CompanyData } from "./companyData"
import { dashCaseToCamelCase } from "@angular/compiler/src/util";

export class Company {
    id: number;
    acronym: string;
    name: string;
    nip: string;
    address1: string;
    city: string;
    postalCode: string;

    static fromJSON(data: CompanyData) : Company {
        let c = new Company();
        c.id = +data.CompanyId;
        c.acronym = data.Acronym;
        c.name = data.Name1;
        c.nip = data.Nip;
        c.address1 = data.Address1;
        c.city = data.City;
        c.postalCode = data.PostalCode;

        return c;
    }
}