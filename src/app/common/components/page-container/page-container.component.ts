import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-container',
  standalone: true,
  imports: [],
  templateUrl: './page-container.component.html',
})
export class PageContainerComponent {
  header = input.required<string>();
}
