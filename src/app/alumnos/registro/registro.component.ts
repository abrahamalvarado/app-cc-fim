import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth-module/services/auth.service';
import * as firebase from 'firebase';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumnos'

@Component({
  selector: 'registro-alumnos',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroAlumnosComponent implements OnInit {
  public alumno: Alumno;


  constructor(private authService: AuthService, private alumnoService: AlumnoService, private router: Router) { 
    this.alumno = {
      id: '',
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
  
  register(alumno){
    this.alumnoService.nuevoAlumno(this.alumno);
    this.router.navigate['alumnos'];
    console.log(this.alumno);
  }
  

  ngOnInit() {
  }

}
