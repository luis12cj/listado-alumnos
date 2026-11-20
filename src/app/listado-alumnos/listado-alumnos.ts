import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Alumno {
  id: number;
  matricula: string;
  nombre: string;
  carrera: string;
  semestre: number;
  status: 'Activo' | 'Suspendido' | 'Egresado';
}

@Component({
  selector: 'app-listado-alumnos',
  imports: [FormsModule],
  templateUrl: './listado-alumnos.html',
  styleUrl: './listado-alumnos.css'
})
export class ListadoAlumnos {
  mostrarTabla: boolean = true;
  filtroNombre: string = '';
  filtroCarrera: string = 'Todos';

  carreras: string[] = [
    'Todos',
    'Ingeniería en Sistemas Computacionales',
    'Ingeniería Mecatrónica',
    'Ingeniería Ambiental'
  ];

  alumnos: Alumno[] = [
    {
      id: 1,
      matricula: '20266002198',
      nombre: 'Luis Enrique Lopez Beltran',
      carrera: 'Ingeniería en Sistemas Computacionales',
      semestre: 7,
      status: 'Activo'
    },
    {
      id: 2,
      matricula: '20246002598',
      nombre: 'María González Torres',
      carrera: 'Ingeniería Mecatrónica',
      semestre: 7,
      status: 'Activo'
    },
    {
      id: 3,
      matricula: '20246003598',
      nombre: 'Carlos Ramírez Díaz',
      carrera: 'Ingeniería en Sistemas Computacionales',
      semestre: 3,
      status: 'Suspendido'
    },
    {
      id: 4,
      matricula: '20246004598',
      nombre: 'Ana Martínez Ruiz',
      carrera: 'Ingeniería Ambiental',
      semestre: 6,
      status: 'Activo'
    },
    {
      id: 5,
      matricula: '20246005598',
      nombre: 'Pedro Sánchez Flores',
      carrera: 'Ingeniería Mecatrónica',
      semestre: 9,
      status: 'Egresado'
    }
  ];

  toggleTabla(): void {
    this.mostrarTabla = !this.mostrarTabla;
  }

  get alumnosFiltrados(): Alumno[] {
    return this.alumnos.filter((alumno) => {
      const coincideNombre = alumno.nombre
        .toLowerCase()
        .includes(this.filtroNombre.toLowerCase().trim());
      const coincideCarrera =
        this.filtroCarrera === 'Todos' || alumno.carrera === this.filtroCarrera;
      return coincideNombre && coincideCarrera;
    });
  }

  get totalAlumnos(): number {
    return this.alumnos.length;
  }

  get totalActivos(): number {
    return this.alumnos.filter((a) => a.status === 'Activo').length;
  }

  get totalEgresados(): number {
    return this.alumnos.filter((a) => a.status === 'Egresado').length;
  }
}