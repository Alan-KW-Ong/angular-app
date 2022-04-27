import { Component } from "@angular/core";

@Component({
    selector: 'app-info-alert',
    template: `
        <p> This is info alert component. It's using inline template and styles. </p>
    `,
    styles: [
        `
        p {
            padding: 20px;
            background-color: mistyrose;
            border: solid 1px red;
        }
    `]
})

export class InfoAlertComponent {

}