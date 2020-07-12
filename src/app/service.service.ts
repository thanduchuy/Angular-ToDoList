import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  db = firebase.firestore();
  constructor() {}
  getToDo() {
    return this.db.collection('list');
  }
  addToDo(content: String, date: Date) {
    return this.db.collection('list').doc().set({
      content: content,
      date: date,
    });
  }
  addHistory(content: String, date: Date) {
    return this.db.collection('history').doc().set({
      content: content,
      date: date,
    });
  }
  deleteToDo(id) {
    return this.db.collection('list').doc(id).delete();
  }
  updateToDo(id, content: String, date: Date) {
    return this.db.collection('list').doc(id).set({
      content: content,
      date: date,
    });
  }
}
