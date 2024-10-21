import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { SharedDataService } from "../../../shared/services/shared-data.service";
import { DatePipe } from "@angular/common";

@Component({
    templateUrl: './default-home.component.html',
    styleUrl: './default-home.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultHomeComponent {
    currentDate: string = '';
    constructor(
        private sharedDataService: SharedDataService,
        private datePipe: DatePipe,
    ) {
        this.sharedDataService.setBreadcrumb(
            { label: 'Trang chủ' },
        )
    }

    ngOnInit(): void {
        this.currentDate = this.datePipe.transform(new Date(), 'dd MMMM') || '';

    }
}
