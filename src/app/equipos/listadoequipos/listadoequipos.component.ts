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
  equipo: any;
  public searching: any;
  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.equipoService.getEquipos().then(response =>{
      this.equipos = response;
    }).catch(err =>{
      console.log(err);
    })
  }

  bajaEquipo(key){
    console.log(key);
    this.equipoService.getEquipo(key).then(response =>{
      this.equipo =  response[0];

      this.equipo.status='BAJA';
      console.log(this.equipo);
      this.equipoService.updateEquipo(this.equipo).then(response =>{
        console.log(this.equipo);
      }).catch(err =>{
        console.log(err);
      });
      this.refresh();
    }).catch(err =>{
      console.log(err);
    })
  }

}
