import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth-module/services/auth.service';
import * as firebase from 'firebase';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-listadoequipos',
  templateUrl: './listadoequipos.component.html',
  styleUrls: ['./listadoequipos.component.css']
})
export class ListadoequiposComponent implements OnInit {
  public equipos: any;
  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.equipoService.getEquipos().then(response =>{
      this.equipos = response;
    }).catch(err =>{
      console.log(err);
    })
  }

}
