import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { VisorComponent } from './pages/visor/visor.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NotaComponent } from './components/nota/nota.component';
import { PanelEntradaComponent } from './components/panel-entrada/panel-entrada.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VisorComponent,
    FooterComponent,
    NotaComponent,
    PanelEntradaComponent,
  ],
  imports: [
    CommonModule,
    NotasRoutingModule,
    ReactiveFormsModule

  ]
})
export class NotasModule { }
