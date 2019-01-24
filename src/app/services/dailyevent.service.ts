import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { EVENT } from '../Activity/EVENT';
import { CLASS } from '../Activity/CLASS';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/index';

@Injectable({
  providedIn: 'root'
})
export class DailyeventService {
  EventsColl: AngularFirestoreCollection<EVENT>;
  Eventos: Observable<any>;

  EventsCollection: AngularFirestoreDocument;
  Events: Observable<any>;

  ClassesCollection: AngularFirestoreCollection<CLASS>;
  Classes: Observable<any>;

  date = new Date().toDateString();
  constructor(public db: AngularFirestore) {
    this.EventsCollection = this.db.collection('EVENTS').doc(this.date);
   }

   GetEventsByClassId(val: any) {
    this.EventsColl = this.db.collection('EVENTS').doc(this.date).collection(val, ref => ref.orderBy('timefrom', 'asc'));
    // console.log(this.EventsColl);
    this.Eventos = this.EventsColl.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as EVENT;
        data.id = a.payload.doc.id;
        return data;
      }); }));
    return this.Eventos;
  }
  GetClassByID(classId: any) {
    this.ClassesCollection = this.db.collection('Classes', ref => ref.where('CGUID', '==', classId));

    this.Classes = this.ClassesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as CLASS;
        data.key = a.payload.doc.id;
        return data;
      }); }));
    return this.Classes;
  }
  addEvent(eve: EVENT, classid: any) {
    this.EventsCollection.collection(classid).add(eve);
  }
  EventDelete(classid: string , id: any) {
    this.db.doc('EVENTS/' + this.date + '/' + classid + '/' + id).delete();
  }
}
