import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth"
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBEDFj55T1epdq59ZE6VSu508MtskUBKlc",
  authDomain: "cwn-clothing-db-5602e.firebaseapp.com",
  projectId: "cwn-clothing-db-5602e",
  storageBucket: "cwn-clothing-db-5602e.appspot.com",
  messagingSenderId: "611560330571",
  appId: "1:611560330571:web:7666346f9eeffa2e8f84ce"
};

const firebaseApp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider)
export const SignInWithGoogleRedirect=()=> signInWithRedirect(auth,provider)
export const db = getFirestore()
export const createUserDocumentFromAuth = async (user,additionalInfo={}) => {

  const userDocRef = doc(db, "users", user.uid)
  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = user
      const createdAt = new Date()
    try {
      await setDoc(userDocRef, { displayName, email, createdAt ,...additionalInfo})
    }
    catch (e){
console.log("There was an error : ",e)
    }
  }
}
export const createUserAuthWithEmailAndPassword=async(email,password)=>{
 if(!email||!password) return
  return await createUserWithEmailAndPassword(auth,email,password)
}
export const signInAuthWithEmailAndPassword=async(email,password)=>{
 if(!email||!password) return
  return await signInWithEmailAndPassword(auth,email,password)
}
export const signOutUser=async()=>{
  await signOut(auth)
}
export const onAuthStateChangedListener=(callback)=>{
  onAuthStateChanged(auth,callback)
}