import { createContext, useState } from "react";
import { Alert } from "react-native";
import { useEffect } from "react";
import * as database from 'firebase/database';
import { db, setRequestStage } from '../../utils/firebase';
import { updateTourStatus } from "../../utils/apiRequest";
import { useAuth } from "./AuthContext";

const TourContext = createContext({
    isAllowListen: 0,
    setAllowListen: () => null,
    tourInfor: {
        id: null,
        pickupStation: {},
        desStation: {},
    },
    setTourInfo: () => null,
});

const TourProvider = ({ children }) => {
    const { session } = useAuth();
    const [tourInfor, setTourInfo] = useState({});
    const [isAllowListen, setAllowListen] = useState(false);
    useEffect(() => {
        if (!isAllowListen) return;
        const reachStationRef = database.ref(db, '/turtlebot_state/isReachStation');
        database.onValue(
            reachStationRef,
            (snapshot) => {
                const reachStation = snapshot.val();
                if (reachStation == 1) {
                    Alert.alert('Reached your pickup station!', 'Please confirm to allow Turtlebot to start the tourguide.',
                        [
                            {
                                text: 'Cancel Tour',
                                onPress: async () => {
                                    try {
                                        setTourInfo(null)
                                        setAllowListen(false);
                                        database.off(reachStationRef);
                                        updateTourStatus(tourInfor.id, 'canceled', session);
                                    } catch (error) {
                                        console.log("error");
                                        console.log(error);
                                    }
                                }
                            },
                            {
                                text: 'Confirm',
                                onPress: async () => {
                                    try {
                                        setRequestStage(tourInfor.desStation, 2);
                                        updateTourStatus(tourInfor.id, 'leading', session);
                                    } catch (error) {
                                        console.log(error);
                                    }
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
                                    try {
                                        setTourInfo(null)
                                        setAllowListen(false);
                                        database.off(reachStationRef);
                                        updateTourStatus(tourInfor.id, 'done', session);
                                    } catch (error) {
                                        console.log(error);
                                    }
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
                tourInfor: tourInfor,
                setTourInfo: (tourInfo) => {
                    setTourInfo(tourInfo);
                }
            }}
        >
            {children}
        </TourContext.Provider>
    );
}

export { TourContext, TourProvider };