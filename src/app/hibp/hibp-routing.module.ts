// Angular imports
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// App imports
import { HIBPComponent } from './hibp.component';

const routes: Routes = [
    {
        path: '',
        component: HIBPComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HIBPRoutingModule { }
