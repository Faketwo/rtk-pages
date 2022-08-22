import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, query, ref, set } from 'firebase/database';

export default function useFirebase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyDsfm5lQhmydlrpz-SryxvBDfeqG3X4gBc',
    authDomain: 'my-first-firebase-projec-7ca56.firebaseapp.com',
    databaseURL:
      'https://my-first-firebase-projec-7ca56-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'my-first-firebase-projec-7ca56',
    storageBucket: 'my-first-firebase-projec-7ca56.appspot.com',
    messagingSenderId: '24381316344',
    appId: '1:24381316344:web:3e28cc1bf72d59a0e1ef0d',
    measurementId: 'G-YPFVWJEBVR',
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const dbRef = query(ref(db, 'rtk-pages'));

  // 覆蓋式寫入
  set(dbRef, {
    username: 'jiaer',
    email: 'jiaer@ckex',
    profile_picture: 'jiaer.jpg',
  });

  // 讀取
  onValue(dbRef, (snapshot) => {
    const rawData = snapshot.val() || {};
    console.log('rawData', rawData);
  });
}
