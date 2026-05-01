import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const rawSiteNamespace = import.meta.env.VITE_FIREBASE_SITE_NAMESPACE || 'beausite'

export const firebaseSiteNamespace = rawSiteNamespace
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9_-]/g, '-')

export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean)

export function getScopedCollectionName(collectionName) {
  return `${firebaseSiteNamespace}_${collectionName}`
}

const app = isFirebaseConfigured
  ? getApps().length
    ? getApp()
    : initializeApp(firebaseConfig)
  : null

export const auth = app ? getAuth(app) : null
export const db = app ? getFirestore(app) : null
