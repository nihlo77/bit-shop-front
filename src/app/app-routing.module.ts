import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';


// enrutamiento de componentes
const routes: Routes = [
 {path:`home`, component:HomeComponent},
  {path:`login`, component: LoginComponent},
  {path:`footer`, component: FooterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch:`full`, component:Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
