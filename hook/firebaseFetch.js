import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, set, onValue, off
} from 'firebase/database';
import stations from '../constants/stations';

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

export const firebaseSetRequestStage = (toStation, stage, fromStation=0) => {
  const stationId = parseInt(toStation.stationId, 10);
  const location = (stage == 2) ? toStation.location : stations[fromStation];
  set(ref(database, '/request'), {
    id: stage,
    param: {
      // x: toStation.location.x,
      // y: toStation.location.y,
      x: location.x,
      y: location.y,
      yaw: 90,
    },
    station: {
      desc: toStation.description,
      id: stationId,
      name: toStation.name,
    },
  });
};

export const isReachStation = () => {
  const [isReach, setIsReach] = useState(false);

  useEffect(() => {
    const unsubscribe = onValue(
      ref(database, '/turtlebot_state/isReachStation'),
      (snapshot) => {
        const isReachValue = snapshot.val();
        setIsReach(isReachValue);
      },
    );
    return () => {
      off(unsubscribe);
    };
  }, []);
  return isReach;
};

// const qrCodeReference = firebase.database().ref('qrcodes/' + codeId+ '/gotScanned');
// qrCodeReference.on('value', function(snapshot) {
//     // get the gotScanned value with snapshot.val();
// });
