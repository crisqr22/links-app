import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticatedService } from '../../services/authenticated.service';
import { Router } from '@angular/router';
import { FormsUtilService } from '../../../shared/services/forms-util.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './login-page.component.html',
  styleUrls: [],
})
export class PageLoginComponent {
  public loginForm: FormGroup;
  public requestIsLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authenticatedService: AuthenticatedService,
    private router: Router,
    public formUtils: FormsUtilService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public onSubmit() {
    if (!this.loginForm.invalid) {
      this.requestIsLoading = true;
      this.authenticatedService.login(this.loginForm.value).subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
    }
  }
}
