import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-col',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './col.component.html',
  styleUrl: './col.component.scss',
})
export class ColComponent {
  matColumnDef = input.required<string>();
  columnLabel = input.required<string>();
}
