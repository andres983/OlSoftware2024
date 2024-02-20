// project.model.ts
export interface IProject {
  id: string;
  project_name: string;
  repo_url: string;
  client: string;
  developers: string;
  ci: boolean;
  cd: boolean;
  backend_tecnology: string;
  frontend_tecnology: string;
  databases: string;
  errors_count: number;
  warning_count: number;
  deploy_count: number;
  percentage_completion: number;
  report_nc: number;
  status: string;
}
