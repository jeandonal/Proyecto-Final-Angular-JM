import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertasComponent } from 'src/app/compartido/alertas/alertas.component';
import { Estudiante } from 'src/app/modelos/modelo.estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent {

estudiantes: Estudiante [] = [
  new Estudiante (1,'Jona', 'Mano', 30, true),
  new Estudiante (2,'Natalia','Benitez', 35, true),
  new Estudiante (3,'Jaun','Guzman', 40, true),
  new Estudiante (4,'Leidy', 'Camargo', 45, true),
  new Estudiante (5,'Miguel', 'Duran', 50, true),
  new Estudiante (6,'Natalia', 'Palacio',  55, true),
  new Estudiante (7,'Critian', 'torres', 60, true),
  new Estudiante (8,'Laura', 'Pinzon', 65, true)
]

// Mostrar columnas en la tabla de Estudiantes
displayedColumns = ['id', 'nombre', 'apellido', 'edad', 'estado', 'editar', 'borrar']

constructor(private readonly dialogService: MatDialog ){}

// Funcion para agregar estudiante cuando agregan informacion al  formulario Estudiantes del componete Alertas
agregarEstudiante(){
const formEstud = this.dialogService.open(AlertasComponent)

formEstud.afterClosed().subscribe((value) => {
  if (value){

    //timar el ultimo ID para agregar el estudiante despues de ese utltimo ID en el siguiente paso
    const ultimoID = this.estudiantes[this.estudiantes.length -1] ?. id;
    // capturar el array existente con ...this
    // y agregar el nuevo contenido ingresado en el vormulario
    this.estudiantes = [...this.estudiantes, new Estudiante(ultimoID + 1, value.nombre, value.apellido, value.edad, true)];
  }
})

}

// Funcion Eliminar estudiante

eliminarEstudiante(estudiantes: Estudiante){
  //El metodo Filter
  // recorre los elementos del arreglo y deja en el array los elementos diferentes al que se selecciono
  this.estudiantes = this.estudiantes.filter((estud) => estud.id !== estud.id);
}


}
