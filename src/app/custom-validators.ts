import {FormControl } from '@angular/forms';

export interface ValidationResult {
    [key: string]: boolean;
}

export class CustomValidators {
    public static strongPassword(control: FormControl): ValidationResult {
        let hasNumber = /\d/.test(control.value);
        let hasUpper = /[A-Z]/.test(control.value);
        let hasLower = /[a-z]/.test(control.value);
        const valid = hasNumber && hasUpper && hasLower;
        if (!valid) {
            // return what´s not valid
            return { strongPassword: true };
        }
        return { strongPassword:false };
    }
}
