import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth-module/services/auth.service';
import * as firebase from 'firebase';
import { PrestamoService } from '../../services/prestamo.service';
import { EquipoService } from '../../services/equipo.service';
import { AlumnoService } from '../../services/alumno.service';
import { Prestamo } from '../../models/prestamo';

@Component({
  selector: 'registro-prestamo',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroPrestamosComponent implements OnInit {
  prestamo: Prestamo;
  alumnos: any;
  equipos: any;

  constructor(private prestamoService: PrestamoService, private equipoService: EquipoService, private alumnoService: AlumnoService, private router: Router) {
    this.prestamo = {
      key: '',
      equipment: '',
      student: '',
      date: '',
      status: 'PENDIENTE'
    }

    this.equipoService.getEquipos().then(response =>{
      this.equipos = response;
      console.log(this.equipos);
    }).catch(err =>{
      console.log(err);
    })

    this.alumnoService.getAlumnos().then(response =>{
      this.alumnos = response;
      console.log(this.alumnos);
    }).catch(err =>{
      console.log(err);
    })
    
  }

  ngOnInit() {
  }

  register(prestamo){
    this.prestamoService.nuevoPrestamo(this.prestamo);
    this.router.navigate(["prestamos"]);
    console.log(this.prestamo);
  }

}
