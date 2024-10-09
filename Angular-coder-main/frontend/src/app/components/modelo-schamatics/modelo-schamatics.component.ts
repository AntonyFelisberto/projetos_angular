import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ModeloSchamaticsDataSource, ModeloSchamaticsItem } from './modelo-schamatics-datasource';

/**
  GERADO USANDO
    ng g @angular/material:table nomeQueVoceVaiDar
*/

@Component({
  selector: 'app-modelo-schamatics',
  templateUrl: './modelo-schamatics.component.html',
  styleUrls: ['./modelo-schamatics.component.css']
})
export class ModeloSchamaticsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ModeloSchamaticsItem>;
  dataSource: ModeloSchamaticsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new ModeloSchamaticsDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
