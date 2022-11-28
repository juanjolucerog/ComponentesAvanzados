import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  dataAlerta;
  dataProteccion;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.Alertas();
  }

  Alertas(): void {
    this.http
      .get('http://localhost:8082/api-integrador/alertas')
      .subscribe((respuesta: any) => (this.dataAlerta = respuesta.data));

    this.http
      .get(
        'http://localhost:8082/api-integrador/alertas/proteccion/cantidad?fechaInicio=01/11/1900&fechaFin=01/11/2050'
      )
      .subscribe(
        (respuesta: any) => (this.dataProteccion = respuesta.data.cantidad)
      );
  }
}
