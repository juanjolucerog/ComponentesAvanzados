import { HttpClient } from "@angular/common/http";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { RespuestaAlertas } from "../_interfaces/respuesta-alertas";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
@Component({
  selector: "app-reportes",
  templateUrl: "./reportes.component.html",
  styleUrls: ["./reportes.component.scss"],
})
export class ReportesComponent {
  displayedColumns: string[] = [
    "idAlerta",
    "juridiccion",
    "dependenciaMPub",
    "dependenciaPol",
    "caso",
    "fechaIngreso",
    "nombreAgraviado",
    "nombreImputado",
    "sexo",
  ];
  ArrayData: RespuestaAlertas[] = [];
  constructor(private http: HttpClient) {}
  dataSource = new MatTableDataSource<RespuestaAlertas>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.getAlertas();
    //this.dataSource.paginator = this.paginator;
  }
  getAlertas() {
    this.http
      .get("http://172.16.60.98:7007/api-integrador/alertas")
      .subscribe((respuesta: any) => {
        this.ArrayData = respuesta.data;
        this.dataSource = new MatTableDataSource<RespuestaAlertas>(
          this.ArrayData
        );
        this.dataSource.paginator = this.paginator;
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  downloadPdf() {
    const doc = new jsPDF();
    autoTable(doc, { html: "#ReporteAlertas" });
    let date: Date = new Date();

    doc.save(
      "Reporte de Alertas " +
        this.ArrayData.length +
        " registros, descargado " +
        date.toLocaleString() +
        " .pdf"
    );
  }
}
