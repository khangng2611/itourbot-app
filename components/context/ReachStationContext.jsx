import { createContext, useState } from "react";
import { Alert } from "react-native";
import { useEffect } from "react";
import * as database from 'firebase/database';
import { db } from '../../hook/firebaseFetch';

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
                    if (reachStation == true) {
                        Alert.alert("OK", "OK");
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