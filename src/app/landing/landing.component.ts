// Angular imports
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

enum sites {
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

    constructor(private titleService: Title) {
        this.titleService.setTitle('Hello - Jakob Pennington');
    }

    openInNewTab(site: string): void {
        window.open(site, '_blank');
    }

    open(site: string): void {
        window.open(site, '_self');
    }

}
