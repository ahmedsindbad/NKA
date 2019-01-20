import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule, } from '@angular/fire/firestore';
import { KID } from '../Kid/KID';
import { EATING } from '../Activity/EATING';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/index';



@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  KidsCollection: AngularFirestoreCollection<KID>;
  Kids: Observable<any>;

  eatingCollection: AngularFirestoreDocument;
  // eats: Observable<KID[]>;
  date = new Date().toDateString();
  constructor(public db: AngularFirestore) {
    // var query = citiesRef.where("capital", "==", true);

   this.eatingCollection = db.collection('EATINGS').doc(this.date);
   // this.eats = this.eatingCollection.valueChanges();
  }

AddUpdateEating(KIDS: KID) {
  this.eatingCollection.collection(KIDS.id).doc(KIDS.key).set(KIDS);
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
