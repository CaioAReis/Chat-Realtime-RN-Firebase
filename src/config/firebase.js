import {
  APP_ID,
  API_KEY,
  PROJECT_ID,
  AUTH_DOMAIN,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from '@env'

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  appId: APP_ID,
  apiKey: API_KEY,
  projectId: PROJECT_ID,
  authDomain: AUTH_DOMAIN,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);