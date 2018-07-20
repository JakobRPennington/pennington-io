// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // {
    //     path: 'hibp',
    //     loadChildren: 'app/hibp/hibp.module#HIBPModule'
    // },
    {
        path: '',
        loadChildren: 'app/landing/landing.module#LandingModule'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
