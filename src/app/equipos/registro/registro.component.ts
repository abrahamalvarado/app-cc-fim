import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth-module/services/auth.service';
import * as firebase from 'firebase';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'registro-equipos',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroEquiposComponent implements OnInit {
  public equipo: Equipo;


  constructor(private authService: AuthService, private equipoService: EquipoService, private router: Router) { 
    this.equipo = {
      key: '',
      code: '',
      name: '',
      brand: '',
      model: '',
      description: '',
      feature: '',
      date: '',
      type: '',
      serial: '',
      place: '',
      status: 'DISPONIBLE'
    }
  }
  
  register(equipo){
    this.equipoService.nuevoEquipo(this.equipo);
    this.router.navigate(["equipos"]);
    console.log(this.equipo);
  }
  

  ngOnInit() {
  }

}
