import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { KID } from '../Kid/KID';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/index';

@Injectable({
  providedIn: 'root'
})
export class KidService {

  KidsCollection: AngularFirestoreCollection<KID>;
  Kids: Observable<any>;

  constructor(public db: AngularFirestore) {
    // this.Kids = db.collection('Kids').valueChanges();
    this.KidsCollection = this.db.collection('Kids', ref => ref.orderBy('id', 'asc'));

    this.Kids = this.KidsCollection.snapshotChanges().pipe(map(changes =>  {
      return changes.map(a => {
        const data = a.payload.doc.data() as KID;
        data.key = a.payload.doc.id;
        return data;
      });
    }));
  }

  GetItem() {
    return this.Kids;
  }

  addkid(kid: KID) {
    this.KidsCollection.add(kid);
  }
}
