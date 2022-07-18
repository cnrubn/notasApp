import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { NotaInterface } from '../../interfaces/notas-interface';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit, DoCheck {

  cadenaDENotas!: NotaInterface[];
  
  constructor() { 


    
  }
  ngDoCheck(): void {
    // console.log( 'docheck:');

    this.cadenaDENotas = JSON.parse(localStorage.getItem('cadenaNotas')!) || [];

    // console.log( 'nota:',this.cadenaDENotas );
  }

  ngOnInit(): void {


  }

  destruir( numID: number ){
    // console.log( 'destruir:',numID );
    this.cadenaDENotas.splice( numID, 1 );

    localStorage.setItem('cadenaNotas', JSON.stringify( this.cadenaDENotas ));
  }



}
