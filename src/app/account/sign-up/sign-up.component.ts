import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
    templateUrl: './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class SignUpComponent {
    constructor() { }

    ngOnInit(): void {

    }
}
