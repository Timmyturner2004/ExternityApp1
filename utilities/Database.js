import * as firebase from "firebase"
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const config = require('../firebase.config.json')

class Database {

    db;

    constructor() {


        const app = firebase.app()
        this.db = app.firestore();

        console.log('db initialized');

    }

    insert(table, object, id) {
        this.db.collection(table).doc(id).set(object)
    }

}

export default Database;