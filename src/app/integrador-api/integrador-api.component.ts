import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-integrador-api",
  templateUrl: "./integrador-api.component.html",
  styleUrls: ["./integrador-api.component.scss"],
})
export class IntegradorApiComponent implements OnInit {
  data;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.Alertas();
  }

  Alertas(): void {
    this.http
      .get("http://172.16.60.98:7007/api-integrador/alertas")
      .subscribe((respuesta: any) => (this.data = respuesta.data));
  }
}
