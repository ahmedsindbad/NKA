import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { KID } from '../Kid/KID';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/index';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  KidsCollection: AngularFirestoreCollection<KID>;
  Kids: Observable<any>;
  coll: AngularFirestoreCollection<KID>;
  constructor(public db: AngularFirestore) {
    // var query = citiesRef.where("capital", "==", true);
  }
  GetItem(val: any) {
    this.KidsCollection = this.db.collection('Kids', ref => ref.where('KCGUID', '==', val));

    this.Kids = this.KidsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as KID;
        data.key = a.payload.doc.id;
        return data;
      }); }));
    return this.Kids;
  }
}