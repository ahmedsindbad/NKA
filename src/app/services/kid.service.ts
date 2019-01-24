import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { KID } from '../Kid/KID';
import { EATING } from '../Activity/EATING';
import { EVENT } from '../Activity/EVENT';
import { CLASS } from '../Activity/CLASS';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/index';

@Injectable({
  providedIn: 'root'
})
export class KidService {

  KidsCollection: AngularFirestoreCollection<KID>;
  Kids: Observable<any>;

  EventCollection: AngularFirestoreCollection<EVENT>;
  Events: Observable<any>;

  EatCollection: AngularFirestoreCollection<EATING>;
  Eats: Observable<any>;

  date = new Date().toDateString();
  constructor(public db: AngularFirestore) {
    // this.Kids = db.collection('Kids').valueChanges();
  }
  // Sample kids data
  GetSampleKids(kidid: string) {
    this.KidsCollection = this.db.collection('Kids', ref => ref.where('id', '==', kidid));

    this.Kids = this.KidsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as KID;
        data.key = a.payload.doc.id;
        return data;
      }); }));
    return this.Kids;
  }
  //  Events Data
  GetEventKids(classid: string) {
    this.EventCollection = this.db.collection('EVENTS/' + this.date + '/' + classid, ref => ref.orderBy('timefrom', 'asc'));

    this.Events = this.EventCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as EVENT;
        data.id = a.payload.doc.id;
        return data;
      }); }));
    return this.Events;
  }

  GetEatKids(kidid: string) {
    this.EatCollection = this.db.collection('EATINGS/' + this.date + '/' + kidid);

    this.Eats = this.EatCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as EATING;
        data.key = a.payload.doc.id;
        return data;
      }); }));
    return this.Eats;
  }

  addkid(kid: KID) {
    this.KidsCollection.add(kid);
  }
}
