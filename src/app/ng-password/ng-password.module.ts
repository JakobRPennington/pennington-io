// Angular imports
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { PasswordService, PasswordValidator } from 'ng-password';
import { ReactiveFormsModule } from '@angular/forms';
// App imports
// Components
import { NgPasswordComponent } from './ng-password.component';
// Modules
import { NgPasswordRoutingModule } from './ng-password-routing.module';

@NgModule({
    imports: [
        ClarityModule,
        CommonModule,
        NgPasswordRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [NgPasswordComponent],
    providers: [
        PasswordService,
        PasswordValidator
    ]
})
export class NgPasswordModule { }
