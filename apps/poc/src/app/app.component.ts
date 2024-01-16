import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedBjFooterComponent } from '@poc/shared/bj-footer';
import { SharedBjHeaderComponent } from '@poc/shared/bj-header';

@Component({
    standalone: true,
    imports: [RouterModule, SharedBjHeaderComponent, SharedBjFooterComponent],
    selector: 'poc-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'poc';
}
