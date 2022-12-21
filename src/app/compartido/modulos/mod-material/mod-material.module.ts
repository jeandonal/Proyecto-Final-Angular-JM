import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importa el modulo te tablas de Material
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    // se nombra el modulo que se importo MatTableModule de Material 
    // declarado mas arriba
MatTableModule,
MatButtonModule,
MatIconModule,
MatDialogModule,
MatFormFieldModule,
MatInputModule,
FormsModule,
ReactiveFormsModule
  ]
})
export class ModMaterialModule { }
