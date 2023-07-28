import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { InfoComponent } from './components/info/info.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/public',
    pathMatch: 'full'

  },

  {
  path: 'public',
  component: PublicComponent
  },

  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'info',
    component: InfoComponent
  },

  {
    path: 'registro',
    component: RegistroComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
