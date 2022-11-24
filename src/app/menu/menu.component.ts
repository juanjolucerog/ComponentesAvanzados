import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  ngOnInit() {}
  title = 'Observatorio';
  ngOnDestroy(): void {}
  constructor(private router: Router) {}
  irReportes() {
    this.router.navigate(['Menu/Reportes']);
  }
  irAlertas() {
    this.router.navigate(['Menu/Alertas']);
  }
  cerrarSession() {
    this.router.navigate(['Login']);
  }
}
