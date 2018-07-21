// Angular imports
import { Component } from '@angular/core';

enum sites {
    blog = 'https://blog.pennington.io',
    email = 'mailto:jakob@pennington.io',
    github = 'https://github.com/JakobRPennington',
    linkedin = 'https://www.linkedin.com/in/jakobpennington',
    medium = 'https://medium.com/@jakob.pennington',
    twitter = 'https://twitter.com/JakobRPenny'
}

@Component({
    selector: 'pennington-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
    // Make enum available to the template
    sites: typeof sites = sites;

    constructor() { }

    openInNewTab(site: string): void {
        window.open(site, '_blank');
    }

    open(site: string): void {
        window.open(site, '_self');
    }

}
