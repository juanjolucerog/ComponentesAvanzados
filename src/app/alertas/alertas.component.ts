import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ModalRegisterAccionesComponent } from '../modal-register-acciones/modal-register-acciones.component';

export interface RequestListaAlertas {
  idAlerta: number;
  juridiccion: string;
  dependenciaMPub: string;
  dependenciaPol: string;
  caso: string;
  fechaIngreso: string;
  nombreAgraviado: string;
  nombreImputado: string;
  sexo: string;
}

export interface ISelect {
  id: number;
  descripcion: string;
}

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss'],
})
export class AlertasComponent {
  ArrayData: RequestListaAlertas[] = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = [
    'idAlerta',
    'nombresFiscal',
    'detalleDelito',
    'juridiccion',
    'dependenciaMPub',
    'dependenciaPol',
    'caso',
    'fechaIngreso',
    'nombreAgraviado',
    'nombreImputado',
    'sexo',
    'idEstado'
  ];
  dataAccion: ISelect[] = [];
  dataMedida: ISelect[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.http
      .get('http://172.16.60.98:7007/api-integrador/alertas/accion')
      .subscribe((respuesta: any) => {
        if (respuesta.data.length > 0) {
          let data = [];
          respuesta.data.forEach((element) => {
            this.dataAccion.push({
              id: element.idAccionAlerta,
              descripcion: element.descripcion,
            });
          });
        }
      });

    this.http
      .get('http://172.16.60.98:7007/api-integrador/alertas/proteccion')
      .subscribe((respuesta: any) => {
        if (respuesta.data.length > 0) {
          respuesta.data.forEach((element) => {
            this.dataMedida.push({
              id: element.idProteccionAlerta,
              descripcion: element.descripcion,
            });
          });
        }
      });
  }

  dataSource = new MatTableDataSource<RequestListaAlertas>();

  ngOnInit(): void {
    this.getAlertas();
  }
  getAlertas() {
    this.http
      .get('http://172.16.60.98:7007/api-integrador/alertas')
      .subscribe((respuesta: any) => {
        this.ArrayData = respuesta.data;
        this.dataSource = new MatTableDataSource<RequestListaAlertas>(
          this.ArrayData
        );
        this.dataSource.paginator = this.paginator;
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onClickAccion(alertaID: number): void {
    const now = new Date();

    const dialogRef = this.dialog.open(ModalRegisterAccionesComponent, {
      width: '500px',
      data: {
        esAccion: true,
        alertaID: alertaID,
        tipoAccionMedida: 0,
        detalle: '',
        dataSelect: this.dataAccion,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        let data = {
          idAlerta: result.alertaID,
          idAccion: result.tipoAccionMedida,
          detalleAccion: result.detalle,
          idMedidaProteccion: null,
          detalleMedidaProteccion: null,
          usuarioRegistro: 'demo',
          fechaRegistro: now.toLocaleDateString(),
        };

        this.http
          .post(
            'http://172.16.60.98:7007/api-integrador/alertas/accion-proteccion',
            data
          )
          .subscribe((respuesta: any) => {
            this.getAlertas();
            alert("Se grabo con exito.");
          });
      }
    });
  }

  onClickMedida(alertaID: string) {
    const now = new Date();

    const dialogRef = this.dialog.open(ModalRegisterAccionesComponent, {
      width: '500px',
      data: {
        esAccion: false,
        alertaID: alertaID,
        tipoAccionMedida: 0,
        detalle: '',
        dataSelect: this.dataMedida,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        let data = {
          idAlerta: result.alertaID,
          idAccion: null,
          detalleAccion: null,
          idMedidaProteccion: result.tipoAccionMedida,
          detalleMedidaProteccion: result.detalle,
          usuarioRegistro: 'demo',
          fechaRegistro: now.toLocaleDateString(),
        };

        this.http
          .post(
            'http://172.16.60.98:7007/api-integrador/alertas/accion-proteccion',
            data
          )
          .subscribe((respuesta: any) => {
            this.getAlertas();
            alert("Se grabo con exito.");
          });
      }
    });
  }
}
