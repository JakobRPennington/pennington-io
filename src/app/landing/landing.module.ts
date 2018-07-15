// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// App imports
// Components
import { LandingComponent } from './landing.component';
// Modules
import { LandingRoutingModule } from './landing-routing.module';
// Font Awesome library
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faMediumM, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
library.add(faEnvelope);
library.add(faGithub);
library.add(faLinkedinIn);
library.add(faMediumM);
library.add(faTwitter);

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        FontAwesomeModule
    ],
    declarations: [LandingComponent]
})
export class LandingModule { }
