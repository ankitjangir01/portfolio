import { FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_AUTH_DOMAIN, FIREBASE_MEASUREMENT_ID, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET } from 'config';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to track page visits
export async function increaseVisitCount() {
    try {
        const pageRef = doc(db, 'metrics/visits');

        // Attempt to get existing document
        const pageDoc = await getDoc(pageRef);

        if (pageDoc.exists()) {
            // If document exists, increment visits
            await updateDoc(pageRef, {
                visits: increment(1)
            });
        } else {
            // If document doesn't exist, create with initial visit
            await setDoc(pageRef, {
                visits: 1,
                lastVisited: new Date()
            });
        }
    } catch (error) {
        console.error("Error tracking page visit:", error);
    }
}

export async function getVisitCount() {
    try {
        // const pageRef = doc(db., 'visits');
        const pageRef = doc(db, 'metrics/visits')
        const pageDoc = await getDoc(pageRef);

        if (pageDoc.exists()) {
            return pageDoc.data().visits || 0;
        }
        return 0;
    } catch (error) {
        console.error("Error getting page visits:", error);
        return 0;
    }
}