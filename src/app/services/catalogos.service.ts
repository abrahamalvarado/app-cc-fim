import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class CatalogosService {

  constructor(public afd: AngularFireDatabase) { }

  //Carreras
  newCarrera(carrera) {
    var myref = firebase.database().ref('/Catalogos/Carreras/').push();
    var key:any = myref.key;
    carrera.key = key;
    myref.update(carrera);
  }

  snapshotToArray(snapshot){
    var returnArr = [];
    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
  }

  getCarreras(){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/Carreras/').on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err);
        }
      });

    });
    return promise
  }

  getCarrera(key){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/Carreras/').orderByKey().equalTo(key).on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  updateCarrera(carrera){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/Carreras/').equalTo(carrera.key).on('value', (snapshot) => {
        try{
          this.afd.list('/Catalogos/Carreras/').update(carrera.key,carrera);
          resolve('Carrera actualizada');
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  //Grupos
  newGroup(grupo) {
    var myref = firebase.database().ref('/Catalogos/Grupos/').push();
    var key:any = myref.key;
    grupo.key = key;
    myref.update(grupo);
  }

  getGrupos(){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/Grupos/').on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err);
        }
      });

    });
    return promise
  }

  getGrupo(key){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/Grupos/').orderByKey().equalTo(key).on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  updateGrupo(grupo){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/Grupos/').equalTo(grupo.key).on('value', (snapshot) => {
        try{
          this.afd.list('/Catalogos/Grupos/').update(grupo.key,grupo);
          resolve('Grupo actualizado');
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  //Centros de Cómputo
  newCC(cc) {
    var myref = firebase.database().ref('/Catalogos/CentrosComputo/').push();
    var key:any = myref.key;
    cc.key = key;
    myref.update(cc);
  }

  getCCS(){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/CentrosComputo/').on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err);
        }
      });

    });
    return promise
  }

  getCC(key){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/CentrosComputo/').orderByKey().equalTo(key).on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  updateCC(cc){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/CentrosComputo/').equalTo(cc.key).on('value', (snapshot) => {
        try{
          this.afd.list('/Catalogos/CentrosComputo/').update(cc.key,cc);
          resolve('Centro de Cómputo actualizado');
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  //Tipos de Hardware
  newtTipoHw(cc) {
    var myref = firebase.database().ref('/Catalogos/TiposHardware/').push();
    var key:any = myref.key;
    cc.key = key;
    myref.update(cc);
  }

  getTiposHw(){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/TiposHardware/').on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err);
        }
      });

    });
    return promise
  }

  getTipoHw(key){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/TiposHardware/').orderByKey().equalTo(key).on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  updateTipoHw(cc){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Catalogos/TiposHardware/').equalTo(cc.key).on('value', (snapshot) => {
        try{
          this.afd.list('/Catalogos/TiposHardware/').update(cc.key,cc);
          resolve('Tipo de Hardware actualizado');
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

}
