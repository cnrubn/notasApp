import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NotaInterface } from '../../interfaces/notas-interface'

@Component({
  selector: 'app-panel-entrada',
  templateUrl: './panel-entrada.component.html',
  styleUrls: ['./panel-entrada.component.css']
})
export class PanelEntradaComponent implements OnInit {
  notaActiva: boolean = true;
  colores: string = 'negro';

  miFormulario: FormGroup = this.fb.group({
    tit: [ '', Validators.required ],
    textoNota: [ '', Validators.required ],
  });

  nota!: NotaInterface;

  // nota: NotaInterface = {
  //   id: 0,  
  //   tit: '',
  //   texto: '',
  //   color: '',
  //   fecha: ''
  // };

  cadenaNotas: NotaInterface[] = [];

  

  // numId: number = 0;

  constructor( private fb: FormBuilder ) { 

    // this.miFormulario.reset ({
    //   tit: 'Título de prueba',
    //   textoNota: 'Texto de prueba'
    // })
  }

  ngOnInit(): void {

    this.cadenaNotas = JSON.parse(localStorage.getItem('cadenaNotas')!) || [];

    if ( this.cadenaNotas.length === 0 ) {
      this.cadenaNotas = [
        { 
          tit: '¡Hola!',
          texto: 'Pulsa + para comenzar a crear tus notas.',
          color: 'negro',
          fecha:  new Date()  
        },
        { 
          tit: '¡Contactar!',
          texto: 'Este tal Rubén es muy bueno, tengo que contactar con él. nzrubn@gmail.com',
          color: 'azul',
          fecha:  new Date()  
        },


      ]

      localStorage.setItem('cadenaNotas', JSON.stringify( this.cadenaNotas ));
    }
  }

  activarNota() {
    this.notaActiva = !this.notaActiva;
  }

  cambiarColor( color: string ) {
    this.colores = color;
  }

  guardar() {

    // let id = Math.floor( Math.random() * 1000 );

    let fecha = new Date();

    this.nota = {
      // id: id,  
      tit: this.miFormulario.value.tit,
      texto: this.miFormulario.value.textoNota,
      color: this.colores,
      fecha: fecha  
    }
    
    this.cadenaNotas.push( this.nota );

    localStorage.setItem('cadenaNotas', JSON.stringify( this.cadenaNotas ));
    
    // console.log (this.nota);
    // console.log ('panel: ',this.cadenaNotas);
    // console.log ({ id });



    this.miFormulario.reset();

  }


}
