import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { UserTableDataSource } from './user-table-datasource';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'elo'];

  ngOnInit() {
    this.dataSource = new UserTableDataSource(this.sort);
  }
}
