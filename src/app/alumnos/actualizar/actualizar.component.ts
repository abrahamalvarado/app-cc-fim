import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth-module/services/auth.service';
import * as firebase from 'firebase';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno'

@Component({
  selector: 'actualizar-alumnos',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarAlumnosComponent implements OnInit {
  public alumno: Alumno;
  public id: number;
  private sub: any
  constructor(private authService: AuthService, private alumnoService: AlumnoService, private router: Router, private route: ActivatedRoute) { 
    this.alumno = {
      key: '',
      numcontrol: '',
      name: '',
      parentlastname: '',
      motherlastname: '',
      group: '',
      period: '',
      class: '',
      classroom: '',
      email: '',
      status: ''
    }
  }
  
  update(alumno){
    this.alumnoService.updateAlumno(this.alumno).then(response =>{
      this.router.navigate(["alumnos"]);
    }).catch(err =>{
      console.log(err);
    });
  }
  

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.alumnoService.getAlumno(this.id).then(response =>{
        this.alumno = response[0];
      }).catch(err =>{
        console.log(err);
      })
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}