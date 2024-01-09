import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'poc-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'poc';
}
