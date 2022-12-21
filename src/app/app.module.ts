import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './compartido/topbar/topbar.component';
import { SidebarComponent } from './compartido/sidebar/sidebar.component';
import { WrapperComponent } from './compartido/wrapper/wrapper.component';
import { EstudiantesComponent } from './paginas/estudiantes/estudiantes.component';
import { ModMaterialModule } from './compartido/modulos/mod-material/mod-material.module';
import { AlertasComponent } from './compartido/alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    WrapperComponent,
    EstudiantesComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
