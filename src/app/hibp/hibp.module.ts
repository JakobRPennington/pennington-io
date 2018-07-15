// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// App imports
// Components
import { HIBPComponent } from './hibp.component';
// Modules
import { HIBPRoutingModule } from './hibp-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HIBPRoutingModule
    ],
    declarations: [HIBPComponent]
})
export class HIBPModule { }
