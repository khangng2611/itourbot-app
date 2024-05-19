import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import * as database from 'firebase/database';
import { db, setRequestStage } from '../../utils/firebase';
import { DataContext } from "./DataContex";
import GetPickupModal from "../common/modal/GetPickupModal";
import GetDestinationModal from "../common/modal/GetDestinationModal";
import InforModal from "../common/modal/InforModal";
import { updateTourStatus } from "../../utils/apiRequest";
import { TOUR_STAGE } from "../../constants";

const TourContext = createContext({
    isAllowListen: 0,
    setAllowListen: () => null,
    tourInfor: {
        _id: null,
        status: null,
        fromStation: null,
        toStation: [],
        createdAt: null,
    },
    setTourInfo: () => null,
});

const TourProvider = ({ children }) => {
    const { stationsList } = useContext(DataContext);
    const [tourInfor, setTourInfo] = useState({
        _id: null,
        status: null,
        fromStation: null,
        toStation: [],
        createdAt: null,
    });
    const [isAllowListen, setAllowListen] = useState(false);
    const [isPickupModalShown, setPickupModalShown] = useState(false);
    const [isDestinationModalShown, setDestinationModalShown] = useState(false);
    const [isInforModal, setInforModal] = useState(false);
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

                    updateTourStatus(tourInfor._id, 'done');
                    setRequestStage([], TOUR_STAGE.idle);
                    setTourInfo({});
                    setAllowListen(false);
                    database.off(reachStationRef);
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
                stationsList = {stationsList}
                setCanceledModal={setInforModal}
            />
            <GetDestinationModal
                isVisible={isDestinationModalShown}
                setVisible={setDestinationModalShown}
            />
            <InforModal 
                isVisible={isInforModal}
                setInforModal={setInforModal}
                headerText={"Notification"}
                contentText={"The tour has been canceled."}
                isInvalid={true}
            />
            {children}
        </TourContext.Provider>
    );
}

export { TourContext, TourProvider };