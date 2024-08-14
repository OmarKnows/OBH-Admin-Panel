import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ITableHeader } from '../../types/interfaces/table-header.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  dataSource = input.required<any[]>();
  headers = input.required<ITableHeader[]>();

  getDisplayedColumns() {
    return this.headers().map((header) => header.identifier);
  }
}
