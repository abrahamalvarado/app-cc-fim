import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Equipo } from '../models/equipo'

@Injectable()
export class EquipoService {
  private db = firebase.database();
  public equipo: Equipo;

  constructor(public afd: AngularFireDatabase) {}

  nuevoEquipo(equipo) {
    this.afd.list('/Equipos/').push(equipo);    
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

  getEquipos(){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Equipos/').on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err);
        }
      });

    });
    return promise
  }

  getFreeEquipos(){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Equipos/').orderByChild('status').equalTo("DISPONIBLE").on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err);
        }
      });

    });
    return promise
  }
  
  getEquipo(key){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Equipos/').orderByKey().equalTo(key).on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  updateEquipo(equipo){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Equipos/').equalTo(equipo.key).on('value', (snapshot) => {
        try{
          this.afd.list('/Equipos/').update(equipo.key, equipo);
          resolve('Equipo actualizado');
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  
}