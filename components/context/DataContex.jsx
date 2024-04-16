import { createContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import Loader from "../common/loader/Loader";

const DataContext = createContext({
    screenWidth: null,
    screenHeight: null,
    stationsList: [],
    setStationsList : () => null,
    setLoaderVisible: () => null,
})

const DataProvider = ({children}) => {
    const [stationsList, setStationsList] = useState([]);
    const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;
    const [isLoaderVisible, setLoaderVisible] = useState(false);
    return (
        <DataContext.Provider
            value={{
                screenWidth: screenWidth,
                screenHeight: screenHeight,
                stationsList: stationsList,
                setStationsList: (stations) => {
                    setStationsList(stations);
                },
                setLoaderVisible: (visible) => {
                    setLoaderVisible(visible);
                }
            }}
        >
            <Loader visible={isLoaderVisible}/>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };