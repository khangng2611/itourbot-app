import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import * as database from 'firebase/database';
import { db } from '../../utils/firebase';
import { useAuth } from "./AuthContext";
import { DataContext } from "./DataContex";
import GetPickupModal from "../common/modal/GetPickupModal";
import GetDestinationModal from "../common/modal/GetDestinationModal";

const TourContext = createContext({
    isAllowListen: 0,
    setAllowListen: () => null,
    tourInfor: {
        _id: null,
        status: null,
        fromStation: null,
        toStation: [],
    },
    setTourInfo: () => null,
});

const TourProvider = ({ children }) => {
    const { session } = useAuth();
    const { stationsList } = useContext(DataContext);
    const [tourInfor, setTourInfo] = useState({
        _id: null,
        status: null,
        fromStation: null,
        toStation: [],
    });
    const [isAllowListen, setAllowListen] = useState(false);
    const [isPickupModalShown, setPickupModalShown] = useState(false);
    const [isDestinationModalShown, setDestinationModalShown] = useState(false);
    useEffect(() => {
        if (!isAllowListen) return;
        const reachStationRef = database.ref(db, '/turtlebot_state/isReachStation');
        database.onValue(
            reachStationRef,
            (snapshot) => {
                const reachStation = snapshot.val();
                if (reachStation == 1) {
                    setPickupModalShown(true);
                } else if (reachStation == 2) {
                    setDestinationModalShown(true);
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
            <GetPickupModal
                isVisible={isPickupModalShown}
                setVisible={setPickupModalShown}
                setAllowListen={setAllowListen}
                tourInfor={tourInfor}
                setTourInfo={setTourInfo}
                session={session}
                stationsList = {stationsList}
            />
            <GetDestinationModal
                isVisible={isDestinationModalShown}
                setVisible={setDestinationModalShown}
                setAllowListen={setAllowListen}
                tourInfor={tourInfor}
                setTourInfo={setTourInfo}
                session={session}
            />
            {children}
        </TourContext.Provider>
    );
}

export { TourContext, TourProvider };