// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// App imports
// Components
import { LandingComponent } from './landing.component';
// Modules
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule
    ],
    declarations: [LandingComponent]
})
export class LandingModule { }
