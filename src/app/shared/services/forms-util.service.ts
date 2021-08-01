import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsUtilService {
  constructor(public translate: TranslateService) {}

  public validErrors(form: FormGroup, formControl: string): null | undefined | boolean {
    return (
      form.get(formControl)?.errors &&
      form.get(formControl)?.errors &&
      (form.get(formControl)?.dirty || form.get(formControl)?.touched)
    );
  }

  public renderKeyError(errors: any) {
    const error: any = Object.keys(errors)
      .map((key) => {
        return `INPUT_ERROR_${key.toUpperCase()}`;
      })
      .shift();
    const translate: any = this.translate.instant(error);

    return translate;
  }
}
