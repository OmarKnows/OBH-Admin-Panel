import { Component } from '@angular/core';
import { TableComponent } from '../../../common/components/table/table.component';
import { EMPLOYEE_DATA } from './dummyData';
import { IEmployee } from '../../../common/types/models/employee.model';
import { ITableHeader } from '../../../common/types/interfaces/table-header.interface';
import { ColComponent } from '../../../common/components/table/col/col.component';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [TableComponent, ColComponent],
  templateUrl: './employee-details.component.html',
})
export class EmployeeDetailsComponent {}
