import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID } from 'config';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to track page visits
export async function increaseVisitCount() {
    try {
        const pageRef = doc(db, 'visits');

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
        const pageRef = doc(db, 'visits');
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