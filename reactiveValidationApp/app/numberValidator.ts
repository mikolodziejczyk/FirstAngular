import { ValidationErrors, AbstractControl } from "@angular/forms";

export function numberValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    let r: ValidationErrors | null = null;
    let v = control.value;

    if (typeof (v) === "string") {
        let res = parseFloat(v);
        if (isNaN(res)) {
            r = { "number": true };
        }
    }

    return r;
}