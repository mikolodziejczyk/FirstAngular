import { Directive } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[appAnotherValidator]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: AnotherValidatorDirective, multi: true }]

})
export class AnotherValidatorDirective implements AsyncValidator {

  constructor() { }

  forbidenNames: string[] = ['Doe', 'Smith'];
  caseInsensitive: boolean = false;

  validate(c: AbstractControl): Promise<{ [key: string]: any; }> | Observable<{ [key: string]: any; }> {

    if (!this.forbidenNames) return Promise.resolve<ValidationErrors>(null);
    if (!c.value) return Promise.resolve<ValidationErrors>(null);

    let value = c.value.trim();
    if (this.caseInsensitive) value = value.toLocaleLowerCase();

    let r = new Promise<ValidationErrors>((resolve, reject) => {
      window.setTimeout(() => {
        let ve: ValidationErrors = null;
        let isForbidden = this.forbidenNames.find(x => (this.caseInsensitive ? x.toLocaleLowerCase() : x) == value);

        if (isForbidden) ve = { forbidden: true };
        resolve(ve);
      }, 1000);
    });

    return r;
  }


}
