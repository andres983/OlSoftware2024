import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SweetAlertService } from '../../../core/services/sweet-alert.service';
import { Router } from '@angular/router';
import { ProjectsService } from '../../../core/services/projects.service';
import { IProject } from '../../../core/data/IProject';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-form-create-project',
  templateUrl: './form-create-project.component.html',
  styleUrls: ['./form-create-project.component.css']
})
export class FormCreateProjectComponent implements OnInit, OnDestroy {

  public form: FormGroup = new FormGroup({});
  private subs = new SubSink();

  public errors_count: number = 24;
  public warning_count: number = 9;
  public deploy_count: number = 8;
  public percentage_completion: number = 62;
  public report_nc: number = 125;
  public status: string = "En Desarrollo";

  constructor(
    private formBuilder: FormBuilder,
    private sweetAlertServices: SweetAlertService,
    private readonly router: Router,
    private readonly projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.buildFormulario();
  }

  get fieldId() {
    return this.form.get('id');
  }
  get fieldProjectName() {
    return this.form.get('project_name');
  }
  get fieldRepoUrl() {
    return this.form.get('repo_url');
  }
  get fieldPassword() {
    return this.form.get('password');
  }
  get fieldClient() {
    return this.form.get('client');
  }
  get fieldDeveloper() {
    return this.form.get('developers');
  }
  get fieldCI() {
    return this.form.get('ci');
  }
  get fieldCD() {
    return this.form.get('cd');
  }
  get fieldBackend() {
    return this.form.get('backend_tecnology');
  }
  get fieldFrontend() {
    return this.form.get('frontend_tecnology');
  }
  get fieldDatabase() {
    return this.form.get('databases');
  }

  public buildFormulario(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      project_name: ['', [Validators.required]],
      repo_url: ['', [Validators.required]],
      password: ['', [Validators.required]],
      client: ['', [Validators.required]],
      developers: ['', [Validators.required]],
      ci: ['', [Validators.required]],
      cd: ['', [Validators.required]],
      backend_tecnology: ['', [Validators.required]],
      frontend_tecnology: ['', [Validators.required]],
      databases: ['', [Validators.required]],
    });
  }

  public createPorject(): void {
    const message = '¿Esta seguro de registrar el proyecto?';
    this.sweetAlertServices.sweetAlertAccionAceptar(message).then((accept: boolean) => {

      const project: IProject = {
        id: this.fieldId?.value,
        project_name: this.fieldProjectName?.value,
        repo_url: this.fieldRepoUrl?.value,
        client: this.fieldClient?.value,
        developers: this.fieldDeveloper?.value,
        ci: this.fieldCI?.value,
        cd: this.fieldCD?.value,
        backend_tecnology: this.fieldBackend?.value,
        frontend_tecnology: this.fieldFrontend?.value,
        databases: this.fieldDatabase?.value,
        errors_count: this.errors_count,
        warning_count: this.warning_count,
        deploy_count: this.deploy_count,
        percentage_completion: this.percentage_completion,
        report_nc: this.report_nc,
        status: this.status
      }

      this.subs.add(this.projectsService.createProject(project).subscribe((data: any) => {
        if (data) {
          const messageExit = 'Se ha creado con exito el proyecto';
          this.sweetAlertServices.sweetAlertInformativo(messageExit);
          this.form.reset();
          window.location.reload();
        }
      })
      )
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
