import { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";
import firebaseConfig from '../env/firebaseConfig';
import { getDatabase, ref, set, get, onValue } from "firebase/database";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const auth = getAuth(app);

export default stateFetch = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [battery, setBattery] = useState();
  const [isFree, setIsFree] = useState();
  // const dbRef = query(ref(database, folder), orderByChild(field), startAt(start), limitToLast(limit))
  useEffect(() => onValue(
    ref(database, "/turtlebot_state"),
    (snapshot) => {
      let data = snapshot.val();
      // const values = Object.values(snapshot.val());
      setX(data["position"]["x"]);
      setY(data["position"]["y"]);
      setBattery(data["battery"]);
      setIsFree(data["isFree"]);
    }
  ));
  return { x, y, battery, isFree };
}

// get(ref(db, '/request')).then((a) => console.log(a));
// return 1;
//   set(ref(db, '/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });

// const qrCodeReference = firebase.database().ref('qrcodes/' + codeId+ '/gotScanned');
// qrCodeReference.on('value', function(snapshot) {
//     // get the gotScanned value with snapshot.val();
// });