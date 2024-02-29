// Import the functions you need from the SDKs you need
// import { collection } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// import { getDocs } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRESTORE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIRESTORE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export const auth = getAuth()
export const db = getFirestore()

export const storage = getStorage()

export default app

// access firestore

// export const getCollection = async (name: any) => {
//   const collectionRef = collection(db, name)
//   const querySnapshot = await getDocs(collectionRef)
//   const data = querySnapshot.docs.map((doc: any) => ({
//     id: doc.id,
//     ...doc.data(),
//   }))
//   console.log(data)
//   return data
// }

// console.log(getCollection('customers'))
