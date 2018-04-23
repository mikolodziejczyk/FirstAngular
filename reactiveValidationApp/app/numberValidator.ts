import { ValidationErrors, FormControl } from "@angular/forms";

export class NumberValidator {
    static validate(control : FormControl) : ValidationErrors | null {
        if (!control.value) return null;

        let r = null;
        let n = parseInt(<string>control.value);
        if (isNaN(n)){
            r = {number: true};
        }

        return r;
    }
}