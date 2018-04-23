import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../repository/companyRepository';
import { Company } from '../repository/company';

@Component({
  selector: 'app-companies-presenter',
  templateUrl: './companies-presenter.component.html',
  styleUrls: ['./companies-presenter.component.less'],
  providers: [ CompanyService ]
})
export class CompaniesPresenterComponent implements OnInit {

  constructor(private companyService: CompanyService) {}

  companies: Company[];

  ngOnInit() {
    this.loadCompanies();

  }

  async loadCompanies(){ 
    this.companies = await this.companyService.getCompanies();
    console.log(`Companies loaded.`);
  }
}
