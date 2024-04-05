import { createContext, useState } from "react";
import { Alert } from "react-native";
import { useEffect } from "react";
import * as database from 'firebase/database';
import { db, setRequestStage } from '../../utils/firebase';

const TourContext = createContext({
    isAllowListen: 0,
    desStation: {},
    pickupStaiton: {},
    setAllowListen: () => null,
    setDesStation: () => null,
    setPickupStation: () => null,
});

const TourProvider = ({ children }) => {
    const [pickupStation, setPickupStation] = useState({});
    const [desStation, setDesStation] = useState({});
    const [isAllowListen, setAllowListen] = useState(false);
    useEffect(() => {
        if (!isAllowListen) return;
        const reachStationRef = database.ref(db, '/turtlebot_state/isReachStation');
        database.onValue(
            reachStationRef,
            (snapshot) => {
                const reachStation = snapshot.val();
                if (reachStation == 1) {
                    Alert.alert('Reached your pickup station!', 'Please confirm to allow Tourtlebot to start the tourguide.',
                        [
                            {
                                text: 'Cancel Tour',
                                onPress: async () => {
                                    setPickupStation(null);
                                    setDesStation(null);
                                    setAllowListen(false);
                                    database.off(reachStationRef);
                                }
                            },
                            {
                                text: 'Confirm',
                                onPress: async () => {
                                    setRequestStage(desStation, 2);
                                }
                            }
                        ]
                    )
                } else if (reachStation == 2) {
                    Alert.alert('Reached your destination!', 'Thank you for your experience.',
                        [
                            {
                                text: 'OK',
                                onPress: async () => {
                                    setPickupStation(null);
                                    setDesStation(null);
                                    setAllowListen(false);
                                    database.off(reachStationRef);
                                    // return () => {
                                    //     console.log("Off db")
                                    //     database.off(reachStationRef);
                                    // };
                                }
                            },
                        ]
                    )
                }
            });
    }, [isAllowListen]);

    return (
        <TourContext.Provider
            value={{
                isAllowListen: isAllowListen,
                setAllowListen: (state) => {
                    setAllowListen(state);
                },
                pickupStaiton: pickupStation,
                setPickupStation: (station) => {
                    setPickupStation(station);
                },
                desStation: desStation,
                setDesStation: (station) => {
                    setDesStation(station);
                },
            }}
        >
            {children}
        </TourContext.Provider>
    );
}

export { TourContext, TourProvider };