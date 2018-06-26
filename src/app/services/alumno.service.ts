import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Alumno } from '../models/alumno'

@Injectable()
export class AlumnoService {
  private db = firebase.database();
  public alumno: Alumno;

  constructor(public afd: AngularFireDatabase) {}

  nuevoAlumno(alumno) {
    this.afd.list('/Alumnos/').push(alumno);    
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

  getAlumnos(){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Alumnos/').on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err);
        }
      });

    });
    return promise
  }

  getAvailableAlumnos(){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Alumnos/').orderByChild('status').equalTo("ACTIVO").on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err);
        }
      });

    });
    return promise
  }

  getAlumno(key){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Alumnos/').orderByKey().equalTo(key).on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  updateAlumno(alumno){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Alumnos/').equalTo(alumno.key).on('value', (snapshot) => {
        try{
          this.afd.list('/Alumnos/').update(alumno.key,alumno);
          resolve('Alumno actualizado');
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  
}