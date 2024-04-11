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

export const setRequestStage = (station, stage) => {
  const requestRef = database.ref(db, '/request');
  if (stage === 0) {
    database.set(requestRef, {
      id: 0,
      param: {
        x: 0,
        y: 0,
        yaw: 0,
      },
      station: {
        description: '',
        id: 0,
        name: '',
      },
    });
    return;
  }
  const stationId = parseInt(station.stationId, 10);
  database.set(requestRef, {
    id: stage,
    param: {
      x: station.location.x,
      y: station.location.y,
      yaw: station.location.yaw,
    },
    station: {
      description: station.description,
      id: stationId,
      name: station.name,
    },
  });
};
