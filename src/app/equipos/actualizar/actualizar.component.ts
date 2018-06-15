import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth-module/services/auth.service';
import * as firebase from 'firebase';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo'

@Component({
  selector: 'actualizar-equipos',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarEquiposComponent implements OnInit {
  public equipo: Equipo;
  public id: number;
  private sub: any
  constructor(private authService: AuthService, private equipoService: EquipoService, private router: Router, private route: ActivatedRoute) { 
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
      status: '',
    }
  }
  
  update(equipo){
    this.equipoService.updateEquipo(this.equipo).then(response =>{
      this.router.navigate(["equipos"]);
    }).catch(err =>{
      console.log(err);
    });
  }
  

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.equipoService.getEquipo(this.id).then(response =>{
        this.equipo = response[0];
      }).catch(err =>{
        console.log(err);
      })
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}