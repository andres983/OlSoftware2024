import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { IUser } from '../../../core/data/IUser';
import { SweetAlertService } from '../../../core/services/sweet-alert.service';
import {Router } from '@angular/router';
import { SubSink } from 'subsink';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: FormGroup = new FormGroup({});
  private subs = new SubSink();

  constructor(
    private formBuilder: FormBuilder,
    private userServices: UserService,
    private sweetAlertServices: SweetAlertService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.buildFormulario();
  }

  get fieldUser() {
    return this.form.get('user');
  }
  get fieldPassword() {
    return this.form.get('password');
  }

  get validateFieldUser() {
    return this.fieldUser!.invalid && this.fieldUser!.touched;
  }

  get validateFieldPassword() {
    return this.fieldPassword!.invalid && this.fieldPassword!.touched;
  }

  public buildFormulario(): void {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public validateUser(): void {


    const userLogin: IUser = {
      user: this.fieldUser?.value,
      password: this.fieldPassword?.value
    }

    this.subs.add(this.userServices.login(userLogin.user, userLogin.password).subscribe({
      next: (data: IUser[]) => {
        if (data.length === 0) {
          this.sweetAlertServices.sweetAlertInformativo('Credenciales no validas');
        } else {
          this.sweetAlertServices.sweetAlertInformativo('Bienvenido !');
          localStorage.setItem('token', data[0].id!);
          this.router.navigateByUrl('/dashboard');

        }
      }
    }))
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
