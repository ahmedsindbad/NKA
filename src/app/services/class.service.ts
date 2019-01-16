import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CLASS } from '../Activity/CLASS';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/index';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  ClassesCollection: AngularFirestoreCollection<CLASS>;
  Classes: Observable<any>;

  constructor(public db: AngularFirestore) {

   }


  GetItem() {
    this.ClassesCollection = this.db.collection('Classes', ref => ref.orderBy('id', 'asc'));

    this.Classes = this.ClassesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as CLASS;
        data.key = a.payload.doc.id;
        return data;
      }); }));
    return this.Classes;
  }
}
