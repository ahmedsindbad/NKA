import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CLASS } from '../Activity/CLASS';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/index';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classes: CLASS[];
  ClassesCollection: AngularFirestoreCollection<CLASS>;
  Classes: Observable<CLASS[]>;
  selectedValue: any;
  constructor(public db: AngularFirestore) {
    this.ClassesCollection = this.db.collection<CLASS>('Classes');
    this.Classes = this.ClassesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CLASS;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    this.Classes.subscribe(Classes => {
      this.classes = Classes;
      // console.log(this.classes);
    });

   }


  GetItem() {
    return this.Classes;
  }
}
