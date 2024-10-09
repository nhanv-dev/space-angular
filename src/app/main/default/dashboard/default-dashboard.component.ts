import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { SharedDataService } from "../../../shared/services/shared-data.service";

@Component({
    templateUrl: './default-dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultDashboardComponent {

    constructor(private sharedDataService: SharedDataService) {
        this.sharedDataService.setBreadcrumb( 
            { label: 'Trang chủ' },
        )
    }

    ngOnInit(): void {
       
    }
}
