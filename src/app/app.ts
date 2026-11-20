import { Component } from '@angular/core';
import { ListadoAlumnos } from './listado-alumnos/listado-alumnos';

@Component({
  selector: 'app-root',
  imports: [ListadoAlumnos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}