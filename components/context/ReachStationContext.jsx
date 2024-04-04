import { createContext, useState } from "react";
import { Alert } from "react-native";
import { useEffect } from "react";
import * as database from 'firebase/database';
import { db } from '../../hook/firebaseFetch';
import { firebaseSetRequestStage } from "../../hook/firebaseFetch";

const ReachStationContext = createContext({
    state: false,
    setState: () => null,
});

const ReachStationProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        if (isLoading) {
            const reachStationRef = database.ref(db, '/turtlebot_state/isReachStation');
            database.onValue(
                reachStationRef,
                (snapshot) => {
                    const reachStation = snapshot.val();
                    if (reachStation != 0) {
                        if (reachStation == 1) {
                            Alert.alert('Reached your pickup station!', 'Please confirm to allow Tourtlebot to start the tourguide.',
                                [
                                    {
                                        text: 'Cancel', onPress: async () => {
                                            // firebaseSetRequestStage(item, 2);
                                        }
                                    },
                                    {
                                        text: 'Confirm', onPress: async () => {
                                            firebaseSetRequestStage(item, 2);
                                        }
                                    }
                                ]
                            )
                        } else if (reachStation == 2) {
                            Alert.alert('Reached your destination!', 'Thank you for your experience.',
                                [
                                    {
                                        text: 'OK', onPress: async () => {
                                            // firebaseSetRequestStage(item, 2);
                                        }
                                    },
                                ]
                            )
                        }
                        setLoading(false);
                        return () => {
                            database.off(reachStationRef);
                        };
                    }
                });
        }
    }, [isLoading]);

    return (
        <ReachStationContext.Provider
            value={{
                state: isLoading,
                setState: (state) => {
                    setLoading(state);
                }
            }}
        >
            {children}
        </ReachStationContext.Provider>
    );
}

export { ReachStationContext, ReachStationProvider };