import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteDetailComponent } from './paciente-detail/paciente-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PacienteListComponent, PacienteDetailComponent],
  exports: [PacienteListComponent]
})
export class PacienteModule { }
