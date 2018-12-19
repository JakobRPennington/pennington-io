// Angular imports
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// App imports
import { NgPasswordComponent } from './ng-password.component';

const routes: Routes = [
    {
        path: '',
        component: NgPasswordComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgPasswordRoutingModule { }
