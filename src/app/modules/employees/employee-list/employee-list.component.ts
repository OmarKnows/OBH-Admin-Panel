import { Component } from '@angular/core';
import { ITableHeader } from '../../../common/types/interfaces/table-header.interface';
import { IEmployee } from '../../../common/types/models/employee.model';
import { EMPLOYEE_DATA } from '../employee-details/dummyData';
import { ColComponent } from '../../../common/components/table/col/col.component';
import { TableComponent } from '../../../common/components/table/table.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [TableComponent, ColComponent, CommonModule, MatTableModule],
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
  dataSource = EMPLOYEE_DATA.map((employee: IEmployee) => ({
    name: `${employee.firstName} ${employee.lastName}`,
    branches: employee.branches
      .map((branch) => branch.branchName.en)
      .join(', '),
  }));
  headers: ITableHeader[] = [
    {
      identifier: 'name',
      label: 'Name',
    },
    {
      identifier: 'branches',
      label: 'Branches',
    },
  ];
}
