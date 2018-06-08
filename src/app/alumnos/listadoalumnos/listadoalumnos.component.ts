import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth-module/services/auth.service';
import * as firebase from 'firebase';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumnos'

@Component({
  selector: 'listadoalumnos',
  templateUrl: './listadoalumnos.component.html',
  styleUrls: ['./listadoalumnos.component.css']
})
export class ListadoalumnosComponent implements OnInit {
  public alumnos: any;
  constructor(private alumnoService: AlumnoService) { 
    this.alumnoService.getAlumnos().then(response =>{
      this.alumnos = response;
      console.log(this.alumnos);
    }).catch(err =>{
      console.log(err);
    });

  }

  ngOnInit() {
  }

}
