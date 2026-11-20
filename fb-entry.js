import {initializeApp} from 'firebase/app';
import {initializeFirestore,getFirestore,persistentLocalCache,collection,doc,onSnapshot,addDoc,updateDoc,writeBatch,query,orderBy} from 'firebase/firestore';
window.FB={initializeApp,initializeFirestore,getFirestore,persistentLocalCache,collection,doc,onSnapshot,addDoc,updateDoc,writeBatch,query,orderBy};
