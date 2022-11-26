import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaAlertas } from '../_interfaces/respuesta-alertas';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
})
export class ReportesComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'idAlerta',
    'juridiccion',
    'dependenciaMPub',
    'dependenciaPol',
    'caso',
    'fechaIngreso',
    'nombreAgraviado',
    'nombreImputado',
    'sexo',
  ];

  constructor(private http: HttpClient) {}
  dataSource = new MatTableDataSource<RespuestaAlertas>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.getAlertas();
  }
  getAlertas() {
    this.http
      .get('http://localhost:8082/api-integrador/alertas')
      .subscribe((respuesta: any) => (this.dataSource = respuesta.data));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
