import { createContext, useState } from "react";
import { useEffect } from "react";
import * as database from 'firebase/database';
import { db, setRequestStage } from '../../utils/firebase';
import { useAuth } from "./AuthContext";
import GetPickupModal from "../common/modal/GetPickupModal";
import GetDestinationModal from  "../common/modal/GetDestinationModal";

const TourContext = createContext({
    isAllowListen: 0,
    setAllowListen: () => null,
    tourInfor: {
        _id: null,
        status: null,
        fromStation: {},
        toStation: {},
    },
    setTourInfo: () => null,
});

const TourProvider = ({ children }) => {
    const { session } = useAuth();
    const [tourInfor, setTourInfo] = useState({
        _id: null,
        status: null,
        fromStation: {},
        toStation: {},
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
                    // Alert.alert('Reached your pickup station!', 'Please confirm to allow Turtlebot to start the tourguide.',
                    //     [
                    //         {
                    //             text: 'Cancel Tour',
                    //             onPress: async () => {
                    //                 try {
                    //                     updateTourStatus(tourInfor._id, 'canceled', session);
                    //                     setTourInfo({})
                    //                     setAllowListen(false);
                    //                     setRequestStage(null, 0);
                    //                     database.off(reachStationRef);
                    //                 } catch (error) {
                    //                     console.log("error");
                    //                     console.log(error);
                    //                 }
                    //             }
                    //         },
                    //         {
                    //             text: 'Confirm',
                    //             onPress: async () => {
                    //                 try {
                    //                     setRequestStage(tourInfor.toStation, 2);
                    //                     setTourInfo({
                    //                         ...tourInfor,
                    //                         status: 'leading',
                    //                     });
                    //                     updateTourStatus(tourInfor._id, 'leading', session);
                    //                 } catch (error) {
                    //                     console.log(error);
                    //                 }
                    //             }
                    //         }
                    //     ]
                    // );
                } else if (reachStation == 2) {
                    setDestinationModalShown(true);
                    // Alert.alert('Reached your destination!', 'Thank you for your experience.',
                    //     [
                    //         {
                    //             text: 'OK',
                    //             onPress: async () => {
                    //                 try {
                    //                     setTourInfo({});
                    //                     setAllowListen(false);
                    //                     database.off(reachStationRef);
                    //                     updateTourStatus(tourInfor._id, 'done', session);
                    //                 } catch (error) {
                    //                     console.log(error);
                    //                 }
                    //                 // return () => {
                    //                 //     console.log("Off db")
                    //                 //     database.off(reachStationRef);
                    //                 // };
                    //             }
                    //         },
                    //     ]
                    // )
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