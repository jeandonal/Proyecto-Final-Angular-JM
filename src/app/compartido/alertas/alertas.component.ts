import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss']
})
export class AlertasComponent {
// esta seccion de ALerta
// Maneja el formulario al agregar un nuevo estuduante
  controlNombre = new FormControl ('',[Validators.required])
  controlApellido = new FormControl('',[Validators.required])
  controlEdad = new FormControl('',[Validators.required])
  
  formularioEstudiante = new FormGroup({
    nombre: this.controlNombre,
    apellido: this.controlApellido,
    edad: this.controlEdad
      })

  constructor(private readonly dialogRef: DialogRef) {}

cerrar (){
  this.dialogRef.close()
}

}
