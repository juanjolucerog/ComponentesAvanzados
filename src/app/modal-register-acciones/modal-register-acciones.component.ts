import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ISelect {
  id: number;
  descripcion: string;
}

export interface DialogData {
  esAccion: boolean;
  alertaID: string;
  tipoAccionMedida: number;
  detalle: string;
  dataSelect: ISelect[]
}

@Component({
  selector: 'app-modal-register-acciones',
  templateUrl: './modal-register-acciones.component.html',
  styleUrls: ['./modal-register-acciones.component.scss']
})
export class ModalRegisterAccionesComponent {
  constructor(public dialogRef: MatDialogRef<ModalRegisterAccionesComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
