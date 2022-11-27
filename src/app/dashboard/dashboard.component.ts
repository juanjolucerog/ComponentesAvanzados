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
      .get('http://172.16.60.98:7007/api-integrador/alertas')
      .subscribe((respuesta: any) => (this.dataAlerta = respuesta.data));

    this.http
      .get('http://172.16.60.98:7007/api-integrador/alertas/proteccion')
      .subscribe((respuesta: any) => (this.dataProteccion = respuesta.data));
  }
}
