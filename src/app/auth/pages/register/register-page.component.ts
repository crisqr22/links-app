import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticatedService } from '../../services/authenticated.service';
import { Router } from '@angular/router';
import { FormsUtilService } from '../../../shared/services/forms-util.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page-register',
  templateUrl: './register-page.component.html',
  styleUrls: [],
})
export class PageRegisterComponent {
  public signinForm: FormGroup;
  public requestIsLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authenticatedService: AuthenticatedService,
    private router: Router,
    public formUtils: FormsUtilService,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {
    this.signinForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public onSubmit() {
    if (!this.signinForm.invalid) {
      this.requestIsLoading = true;
      this.authenticatedService.register(this.signinForm.value).subscribe((data) => {
        const message = this.translate.instant('REGISTER_SUCCESS_FULL');
        this.toastr.success(message);
        this.router.navigate(['/auth/login']);
      });
    }
  }
}
