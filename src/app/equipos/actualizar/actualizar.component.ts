import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth-module/services/auth.service';
import * as firebase from 'firebase';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../models/equipo';
import { CatalogosService } from '../../services/catalogos.service';

@Component({
  selector: 'actualizar-equipos',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarEquiposComponent implements OnInit {
  public equipo: Equipo;
  public id: number;
  private sub: any;
  tipos: any;
  ccs: any;

  constructor(private authService: AuthService, private equipoService: EquipoService, private router: Router, private route: ActivatedRoute, private catalogosService: CatalogosService) { 
    this.equipo = {
      key: '',
      code: '',
      name: '',
      brand: '',
      model: '',
      description: '',
      feature: '',
      date: '',
      idtype: '',
      type: '',
      serial: '',
      idplace: '',
      place: '',
      status: '',
    }
  }
  
  update(equipo){
    this.catalogosService.getTipoHw(this.equipo.idtype).then(response =>{
      this.catalogosService.getCC(this.equipo.idplace).then(response2 =>{
        this.equipo.type = response[0].type;
        this.equipo.place = response2[0].place;
        
        this.equipoService.updateEquipo(this.equipo);
        this.router.navigate(["equipos"]);
        console.log(this.equipo);
      })
    }).catch(err =>{
      console.log(err);
      alert('Error de conexión');
    })

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

   this.catalogosService.getTiposHw().then(response =>{
      this.tipos = response;
    }).catch(err =>{
      console.log(err);
    });

    this.catalogosService.getCCS().then(response =>{
      this.ccs = response;
    }).catch(err =>{
      console.log(err);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}