import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../Firebase";
export const addDocument = async (Collection, data) => {
  try {
    return await addDoc(collection(db, Collection), data);
  } catch (error) {
    console.log(error);
  }
};

export const getDocuments = async (Collection) => {
  try {
    const q = query(collection(db, Collection));
    const querySnapshot = await getDocs(q);
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error get document: ", error);
  }
};

export const getDocumentById = async (collection, Id) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const getDocumentsByField = async (Collection, field, value) => {
  try {
    const q = query(collection(db, Collection), where(field, "==", value));
    const querySnapshot = await getDocs(q);
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const checkDocument = async (Collection, currentData) => {
  return new Promise((resolve, reject) => {
    const q = query(
      collection(db, Collection),
      where("password", "==", currentData)
    );

    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          reject(new Error("Không có dữ liệu."));
        } else {
          resolve();
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateDocument = async (collectionName, id, newData) => {
  await updateDoc(doc(db, collectionName, id), newData);
};

export const delDocument = async (collection) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
