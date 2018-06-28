import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/catalogos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  carreras : any;
  grupos: any = [];
  objgrupo: any;
  constructor(private catalogosService: CatalogosService) { 
    this.objgrupo = {
      group:'',
      idcareer: '',
      career:'',
      key:''
    }
  }

  ngOnInit() {
    this.catalogosService.getCarreras().then(response =>{
      this.carreras = response;
    }).catch(err =>{
      console.log(err);
    })

    this.refresh();
    
  }

  register(grupo){
    this.catalogosService.getCarrera(this.objgrupo.idcareer).then(response =>{
      this.objgrupo.career = response[0].career;
      this.catalogosService.newGroup(this.objgrupo);
      console.log(this.objgrupo);
    });
    location.reload();
  }

  getGrupo(key){
    this.catalogosService.getGrupo(key).then(response =>{
      this.objgrupo = response[0];
      console.log(this.objgrupo);
    }).catch(err =>{
      console.log(err);
    })

  }

  edit(grupo){
    this.catalogosService.updateGrupo(this.objgrupo);
    console.log(this.objgrupo);
    location.reload();
  }

  refresh(){
    this.catalogosService.getGrupos().then(response =>{
      this.grupos = response;
    }).catch(err =>{
      console.log(err);
    })

    this.objgrupo = {
      group:'',
      idcareer: '',
      career:'',
      key:''
    }
  }

}
