import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth-module/services/auth.service';
import * as firebase from 'firebase';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'listadoalumnos',
  templateUrl: './listadoalumnos.component.html',
  styleUrls: ['./listadoalumnos.component.css']
})
export class ListadoalumnosComponent implements OnInit {
  public alumnos: any;
  public alumno: any;
  public searching: any;
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.alumnoService.getAlumnos().then(response =>{
      this.alumnos = response;
    }).catch(err =>{
      console.log(err);
    })
  }

  bajaAlumno(key){
    console.log(key);
    this.alumnoService.getAlumno(key).then(response =>{
      this.alumno =  response[0];

      this.alumno.status='BAJA';
      console.log(this.alumno);
      this.alumnoService.updateAlumno(this.alumno).then(response =>{
        console.log(this.alumno);
      }).catch(err =>{
        console.log(err);
      });
      this.refresh();
    }).catch(err =>{
      console.log(err);
    })
  }

}
