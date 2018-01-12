import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class NpcService {
  constructor(private db: AngularFirestore) {}

  getNPC(id) {
    return this.db.collection('npc').doc('xhBDfCrVAcP0hIx7I8Gd').snapshotChanges().map(
      response => {
        const data = response.payload.data();
        return { id: response.payload.id, ...data };
      });
  }
}
