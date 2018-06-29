import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth-module/services/auth.service';
import * as firebase from 'firebase';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno';
import { CatalogosService } from '../../services/catalogos.service';

@Component({
  selector: 'actualizar-alumnos',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarAlumnosComponent implements OnInit {
  public alumno: Alumno;
  public id: number;
  private sub: any;
  carreras: any;
  grupos: any;

  constructor(private authService: AuthService, private alumnoService: AlumnoService, private router: Router, private route: ActivatedRoute,  private catalogosService: CatalogosService) { 
    this.alumno = {
      key: '',
      numcontrol: '',
      name: '',
      parentlastname: '',
      motherlastname: '',
      idgroup: '',
      group: '',
      period: '',
      idclass: '',
      class: '',
      classroom: '',
      email: '',
      status: ''
    }
  }
  
  update(alumno){
    this.catalogosService.getCarrera(this.alumno.idclass).then(response =>{
      this.catalogosService.getGrupo(this.alumno.idgroup).then(response2 =>{
        this.alumno.class = response[0].career;
        this.alumno.group = response2[0].group;
        
        this.alumnoService.updateAlumno(this.alumno);
        this.router.navigate(["alumnos"]);
        console.log(this.alumno);
      })
    }).catch(err =>{
      console.log(err);
      alert('Error de conexión');
    })

  }
  

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.alumnoService.getAlumno(this.id).then(response =>{
      this.alumno = response[0];
      
      this.catalogosService.getGrupoxCarrera(this.alumno.idclass).then(response =>{
        this.grupos = response;
      }).catch(err =>{
        console.log(err);
      });
      
      }).catch(err =>{
        console.log(err);
      })
   });

   this.catalogosService.getCarreras().then(response =>{
      this.carreras = response;
    }).catch(err =>{
      console.log(err);
    });

    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  valueChange(){
    console.log(this.alumno.idclass);
    this.catalogosService.getGrupoxCarrera(this.alumno.idclass).then(response =>{
      this.grupos = response;
      console.log(this.grupos);
    }).catch(err =>{
      console.log(err);
    });
  }

}