import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { SharedDataService } from "../../../shared/services/shared-data.service";

@Component({
    templateUrl: './default-home.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultHomeComponent {

    constructor(private sharedDataService: SharedDataService) {
        this.sharedDataService.setBreadcrumb(
            { label: 'Space', url: '/main/home' },
            { label: 'Home' },
        )
    }

    ngOnInit(): void {
    }
}
