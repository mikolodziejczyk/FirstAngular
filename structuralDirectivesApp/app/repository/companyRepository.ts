import { Company } from "./company"
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { CompanyData } from "./companyData";


@Injectable()
export class CompanyService {
    constructor(private http: HttpClient) { }

    async getCompanies() : Promise<Company[]> {
        let rawDataPromise: Promise<CompanyData[]> = this.http.get<CompanyData[]>("/data/company/getCompanies").toPromise();
        let rawData: CompanyData[] = await rawDataPromise;
        let companies: Company[] = rawData.map(cd => Company.fromJSON(cd));
        return companies;
    }

}