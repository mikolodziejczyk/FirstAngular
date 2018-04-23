import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appMyValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MyValidatorDirective, multi: true }]

})
export class MyValidatorDirective implements Validator {


  constructor() { }

  forbidenNames: string[] = ['Doe','Smith'];
  caseInsensitive: boolean = false;

  validate(c: AbstractControl): { [key: string]: any; } {
    if (!this.forbidenNames) return null;
    if (!c.value) return null;

    let value = c.value.trim();
    if (this.caseInsensitive) value = value.toLocaleLowerCase();

    let isForbidden = this.forbidenNames.find(x => (this.caseInsensitive ? x.toLocaleLowerCase() : x) == value);

    let r: ValidationErrors = null;

    if (isForbidden) r = { forbidden: this.forbidenNames };

    return r;
  }



}
