import { AbstractControl, AsyncValidator, AsyncValidatorFn } from '@angular/forms';
import { ApiService } from '@reactive-forms/services/api.service';
import { map } from 'rxjs/operators';

export function userNameValidator(apiService: ApiService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return apiService.validateUserName(control.value).pipe(
            map((response: Boolean) => {
                console.log(response);
                return response ? { nameExists: true } : null;
            })
        );
    };
}
