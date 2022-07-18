import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisorComponent } from './pages/visor/visor.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: VisorComponent},
      {path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasRoutingModule { }
