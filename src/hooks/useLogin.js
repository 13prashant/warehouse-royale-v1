import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { LOGIN } from '../contexts/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/auth';
import { doc, getDoc } from 'firebase/firestore';
import { COLLECTION_USERS } from '../utils/constants';
import { db } from '../database/firestore';

export default function useLogin() {
  const { dispatch } = useAuthContext();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const getDocument = async (collectionName, documentId) => {
    try {
      const documentRef = doc(db, collectionName, documentId);

      const documentSnap = await getDoc(documentRef);

      if (documentSnap.exists()) {
        return { ...documentSnap.data(), id: documentSnap.id };
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error: ', error.message);
      return null;
    }
  };

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      let result = await signInWithEmailAndPassword(auth, email, password);

      const userFromCollection = await getDocument(
        COLLECTION_USERS,
        result.user.uid
      );

      if (!userFromCollection) {
        throw new Error('user from collection not fetched');
      }

      //   Save user role to local storage
      localStorage.setItem('warehouse_user_role', userFromCollection.role);

      result.user.role = userFromCollection.role;

      dispatch({ type: LOGIN, payload: result.user });
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
      console.error(error);
    }
  };

  return { login, isPending, error };
}
