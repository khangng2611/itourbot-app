import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import * as database from 'firebase/database';

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
export const db = database.getDatabase(app);
// const auth = getAuth(app);

export const fetchState = () => {
  const [{
    x, y, battery, isFree,
  }, setState] = useState({});
  const stateRef = database.ref(db, '/turtlebot_state');

  useEffect(() => database.onValue(
    stateRef,
    (snapshot) => {
      const data = snapshot.val();
      setState({
        x: data.position.x,
        y: data.position.y,
        battery: data.battery,
        isFree: data.isFree,
      });
    },
  ), []);
  return {
    x, y, battery, isFree,
  };
};

export const setRequestStage = (stationObjArr, stage) => {
  const requestRef = database.ref(db, '/request');
  let stations = {};
  for (const idx in stationObjArr) {
    const stationKey = `station${idx}`;
    const stationObj = stationObjArr[idx];
    stations = {
      ...stations,
      [stationKey]: {
        id: parseInt(stationObj.stationId, 10),
        name: stationObj.name,
        description: stationObj.description,
        x: stationObj.location.x,
        y: stationObj.location.y,
        yaw: stationObj.location.yaw
      },
    };
  }
  database.set(requestRef, {
    id: stage,
    numStation: stationObjArr.length,
    ...stations,
  });
  return;
};
// const stationId = parseInt(stationObj.stationId, 10);
// database.set(requestRef, {
//   id: stage,
//   param: {
//     x: stationObj.location.x,
//     y: stationObj.location.y,
//     yaw: stationObj.location.yaw,
//   },
//   station: {
//     description: stationObj.description,
//     id: stationId,
//     name: stationObj.name,
//   },
// });