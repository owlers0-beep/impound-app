import {initializeApp,deleteApp} from 'firebase/app';
import {getAuth,signInWithEmailAndPassword,signOut,onAuthStateChanged,createUserWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth';
import {getFirestore,collection,doc,getDoc,setDoc,updateDoc,onSnapshot,query,orderBy} from 'firebase/firestore';
window.FBA={initializeApp,deleteApp,getAuth,signInWithEmailAndPassword,signOut,onAuthStateChanged,createUserWithEmailAndPassword,sendPasswordResetEmail,getFirestore,collection,doc,getDoc,setDoc,updateDoc,onSnapshot,query,orderBy};
