import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './Pages/component1/component1.component';
import { Component2Component } from './Pages/component2/component2.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { GuardNo1Guard } from './Guards/guard-no1.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'component1',
    pathMatch: 'full'
  },
  {
    path: 'component1',
    component: Component1Component
  },
  {
    path: 'component2',
    component: Component2Component
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
