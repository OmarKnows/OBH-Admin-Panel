import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ITableHeader } from '../../types/interfaces/table-header.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  dataSource = input.required<any[]>();
  headers = input.required<ITableHeader[]>();

  getDisplayedColumns() {
    console.log(this.headers().map((header) => header.identifier));
    return this.headers().map((header) => header.identifier);
  }
}
