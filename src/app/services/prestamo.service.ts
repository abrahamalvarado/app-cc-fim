import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Prestamo } from '../models/prestamo';

@Injectable()
export class PrestamoService {
  private db = firebase.database();
  public prestamo : Prestamo;

  constructor(public afd: AngularFireDatabase) {}

  nuevoPrestamo(prestamo) {
    this.afd.list('/Prestamos/').push(prestamo);    
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

  getPrestamos(){
    let promise = new Promise((resolve, reject) =>{
     firebase.database().ref('/Prestamos/').on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err);
        }
      });

    });
    return promise
  }

  getPrestamo(key){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Prestamos/').orderByKey().equalTo(key).on('value', (snapshot) => {
        try{
          resolve(this.snapshotToArray(snapshot));
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

  updatePrestamo(prestamo){
    let promise = new Promise((resolve, reject) =>{
      firebase.database().ref('/Prestamos/').equalTo(prestamo.key).on('value', (snapshot) => {
        try{
          this.afd.list('/Prestamos/').update(prestamo.key, prestamo);
          resolve('Prestamo actualizado');
        }catch(err){
          reject(err)
        }
      });
    })
    return promise;
  }

}
