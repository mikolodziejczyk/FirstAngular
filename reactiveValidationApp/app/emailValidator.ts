import { AbstractControl, ValidationErrors, AsyncValidatorFn } from "@angular/forms";
import { EMailCheckService } from "./e-mail-check.service";

export class EmailAsyncValidator {

emailTimeout : any = null;

emailValidator = (c: AbstractControl): Promise<ValidationErrors | null> => {
    
    if (this.emailTimeout) {
        window.clearTimeout(this.emailTimeout);
        console.log(`Cancelled previous.`);
    }

    let v = c.value;

    if (!v) return Promise.resolve(null);

    let p: Promise<ValidationErrors | null> = new Promise<ValidationErrors | null>( (resolve, reject) => {
        this.emailTimeout = window.setTimeout( async () => {

            this.emailTimeout = undefined;

            console.log(`Checking actually.`);

        let es = new EMailCheckService();
        let isAllowed = await es.isAllowed(v);
    
        let r: ValidationErrors | null = null;
    
        if (!isAllowed) r = { "emailValidator": true };

        resolve(r);

        },
        750
    );
    
    }); 


    return p;
 }

 static get validator(): AsyncValidatorFn {
    let instance = new EmailAsyncValidator();
    return instance.emailValidator;
}
}