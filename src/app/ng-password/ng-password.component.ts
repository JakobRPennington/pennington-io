// Angular imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
// App imports
// HIBP Library
import { PasswordService, PasswordValidator } from 'ng-password';

@Component({
    selector: 'pennington-ng-password',
    templateUrl: './ng-password.component.html',
    styleUrls: ['./ng-password.component.scss']
})
export class NgPasswordComponent implements OnInit {
    // Registration form
    registrationForm: FormGroup;

    // loading status
    loading = false;

    // Password minimum length
    passwordminLength = 10;

    // Are we on a mobile device?
    isMobile = false;

    constructor(
        private fb: FormBuilder,
        private passwordService: PasswordService,
        private passwordValidator: PasswordValidator,
        private titleService: Title
    ) {
        this.titleService.setTitle('ng-password - Jakob Pennington');
    }

    ngOnInit(): void {
        // Create the form
        this.registrationForm = this.fb.group(
            {
                email: ['', Validators.required],
                password: ['', [
                    Validators.required,
                    Validators.minLength(this.passwordminLength)],
                    this.passwordValidator.checkPasswordAnon.bind(this.passwordValidator)],
                confirmPassword: ['', Validators.required]
            }, { validator: this.passwordValidator.matchPasswordValidator });

        // Change validation messages based on mobile or desktop
        this.isMobile = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
    }

    onRegisterClicked(): void {
        // Do something
    }

    // Form control getters
    get email() { return this.registrationForm.get('email'); }
    get password() { return this.registrationForm.get('password'); }
    get confirmPassword() { return this.registrationForm.get('confirmPassword'); }

}
