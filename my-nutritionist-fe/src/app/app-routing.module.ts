import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login.page';
import { HomePage } from './pages/home.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'home',
    component: HomePage,
  },
  // TODO: gestire la wildcard, capire dove farla atterrare
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
