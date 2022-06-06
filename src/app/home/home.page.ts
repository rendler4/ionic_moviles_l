import { Component, OnInit } from '@angular/core';

import { Persona } from '../_interfaces/persona.interface';

import * as PERSONA from '../../assets/data/p.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  persona:Persona = {
    id:12345,
    nombre:'Andres',
    apellido:'Reyes',
    estado:true,
    edad:21
  }
  

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.persona=PERSONA as any;
    console.log(this.persona['data']);
  }

}
