import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged} from 'firebase/auth';
import {getFirestore,collection,getDocs,doc,getDoc,setDoc,addDoc,deleteDoc,writeBatch} from 'firebase/firestore';
import {studioDefaults} from './studio-profile';
export const base='/com/';
const app=initializeApp({apiKey:"AIzaSyDTWUg_E3zphScyEqzeB9ksjqLdOVhQ-II",authDomain:"aslamstudioz-a0e77.firebaseapp.com",projectId:"aslamstudioz-a0e77",storageBucket:"aslamstudioz-a0e77.firebasestorage.app",messagingSenderId:"765689219555",appId:"1:765689219555:web:049df8c57570b95c0838d6"});
export const auth=getAuth(app),db=getFirestore(app);
export const owner=(u:any)=>!!u&&u.emailVerified&&u.email?.toLowerCase()==='aslamstudioz01@gmail.com';
export const login=()=>signInWithPopup(auth,new GoogleAuthProvider());
export const logout=()=>signOut(auth);
export {onAuthStateChanged,collection,getDocs,doc,setDoc,addDoc,deleteDoc,writeBatch};
export function photoUrl(value:string){if(typeof value!=='string')return '';const p=value.trim().replace(/^public\//,'').replace(/^\/+/, '');if(!/^(images|brand)\/[a-zA-Z0-9_./ -]+\.(jpg|jpeg|png|webp)$/i.test(p)||p.split('/').includes('..'))return '';return base+p.split('/').map(encodeURIComponent).join('/');}
export async function readContent(){const [a,p,s]=await Promise.all([getDocs(collection(db,'albums')),getDocs(collection(db,'photos')),getDoc(doc(db,'settings','public'))]);const settings={...studioDefaults,...(s.exists()?s.data():{})};for(const k of Object.keys(settings)){if(k==='whatsapp'){if(!/^\d{7,15}$/.test(settings[k]))settings[k]=studioDefaults.whatsapp;}else if(settings[k]&&!/^https:\/\//.test(settings[k]))settings[k]='';}return {albums:a.docs.map(d=>({...d.data(),id:d.id})).sort((a:any,b:any)=>(b.created||0)-(a.created||0)),photos:p.docs.map(d=>({...d.data(),id:d.id})).filter((p:any)=>photoUrl(p.url)).sort((a:any,b:any)=>(a.order||0)-(b.order||0)),settings};}
