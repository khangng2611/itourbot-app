import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, set, onValue,
} from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  databaseURL: process.env.EXPO_PUBLIC_DATABASE_URL,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
  // authDomain: 'turtlebot3-3bd17.firebaseapp.com',
  // storageBucket: 'turtlebot3-3bd17.appspot.com',
  // messagingSenderId: 'sender-id',
  // measurementId: 'G-measurement-id',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const auth = getAuth(app);

export const fetchState = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [battery, setBattery] = useState();
  const [isFree, setIsFree] = useState();

  useEffect(() => onValue(
    ref(database, '/turtlebot_state'),
    (snapshot) => {
      const data = snapshot.val();
      // const values = Object.values(snapshot.val());
      setX(data.position.x);
      setY(data.position.y);
      setBattery(data.battery);
      setIsFree(data.isFree);
    },
  ));
  return {
    x, y, battery, isFree,
  };
};

export const firebaseSetRequestStage = (fromStation, stage) => {
  const stationId = parseInt(fromStation.stationId, 10);
  set(ref(database, '/request'), {
    id: stage,
    param: {
      x: fromStation.location.x,
      y: fromStation.location.y,
      yaw: 90,
    },
    station: {
      desc: fromStation.description,
      id: stationId,
      name: fromStation.name,
    },
  });
};

// const qrCodeReference = firebase.database().ref('qrcodes/' + codeId+ '/gotScanned');
// qrCodeReference.on('value', function(snapshot) {
//     // get the gotScanned value with snapshot.val();
// });
